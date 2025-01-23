package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"sync"
	"time"
)

var (
	storageFile = "gallery.json"
	imageDir    = "images"
	counter     int64      // Licznik globalny
	mutex       sync.Mutex // Synchronizacja dla licznika
)

// loadImages funkcja pomocnicza do załadowania danych galerii obrazów z pliku JSON
func loadImages() (map[string][]Image, error) {
	mutex.Lock()
	defer mutex.Unlock()

	if _, err := os.Stat(storageFile); os.IsNotExist(err) {
		fmt.Println("Gallery file does not exist, initializing empty gallery.")
		return make(map[string][]Image), nil
	}

	file, err := os.Open(storageFile)
	if err != nil {
		fmt.Printf("Error opening gallery file: %v\n", err)
		return nil, err
	}
	defer file.Close()

	var images map[string][]Image
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&images)
	if err != nil {
		fmt.Printf("Error decoding gallery file: %v\n", err)
		return nil, err
	}

	return images, nil
}

// saveImages funkcja pomocnicza do zapisania danych galerii obrazów do pliku JSON
func saveImages(images map[string][]Image) error {
	mutex.Lock()
	defer mutex.Unlock()

	file, err := os.Create(storageFile)
	if err != nil {
		fmt.Printf("Error creating gallery file: %v\n", err)
		return err
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	err = encoder.Encode(images)
	if err != nil {
		fmt.Printf("Error encoding gallery file: %v\n", err)
		return err
	}

	return nil
}

// saveEditedImageHandler
//
// @Summary Zapisuje edytowany obraz przesłany przez użytkownika.
// @Description Funkcja umożliwia użytkownikowi zapisanie edytowanego obrazu na serwerze. Tworzy unikalną nazwę pliku, zapisuje go w katalogu użytkownika i aktualizuje dane w galerii obrazów.
// @Tags Images
// @Accept multipart/form-data
// @Produce application/json
// @Param image formData file true "Plik obrazu do zapisania"
// @Success 200 {object} Image "Informacje o zapisanym obrazie"
// @Failure 400 {string} string "Błąd parsowania danych formularza"
// @Failure 401 {string} string "Brak autoryzacji"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/edit [post]

func saveEditedImageHandler(w http.ResponseWriter, r *http.Request) {
	// Ustawienie nagłówka CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Parsowanie formularza
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		return
	}

	// Pobranie pliku
	file, handler, err := r.FormFile("image")
	if err != nil {
		http.Error(w, "Error retrieving file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	// Pobranie identyfikatora użytkownika z nagłówka
	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	// Tworzenie folderu użytkownika
	userDir := filepath.Join("uploads", userID)
	err = os.MkdirAll(userDir, os.ModePerm)
	if err != nil {
		http.Error(w, "Error creating user directory", http.StatusInternalServerError)
		return
	}

	// Unikalna nazwa pliku, aby uniknąć nadpisania
	maskedFileName := fmt.Sprintf("masked_%s", handler.Filename)
	filePath := filepath.Join(userDir, maskedFileName)

	// Sprawdzenie, czy plik już istnieje
	if _, err := os.Stat(filePath); err == nil {
		// Jeśli plik istnieje, dodaj unikalny znacznik czasu do nazwy
		timestamp := time.Now().Format("0405")
		maskedFileName = fmt.Sprintf("masked_duplikat_%s_%s", timestamp, handler.Filename)
		filePath = filepath.Join(userDir, maskedFileName)
	}

	// Zapisanie pliku
	out, err := os.Create(filePath)
	if err != nil {
		http.Error(w, "Error saving file", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	_, err = io.Copy(out, file)
	if err != nil {
		http.Error(w, "Error writing to file", http.StatusInternalServerError)
		return
	}

	// Załaduj istniejącą galerię
	images, _ := loadImages()

	// Sprawdzenie, czy wpis o tej nazwie już istnieje w galerii
	for _, img := range images[userID] {
		if img.Filename == maskedFileName {
			http.Error(w, "Duplicate entry in gallery", http.StatusConflict)
			return
		}
	}

	// Dodaj nowy obraz do galerii użytkownika
	image := Image{
		Filename: maskedFileName,
		URL:      fmt.Sprintf("http://localhost:8000/uploads/%s/%s", userID, maskedFileName),
		UserID:   userID,
	}
	images[userID] = append(images[userID], image)

	// Zapisz zaktualizowaną galerię
	err = saveImages(images)
	if err != nil {
		http.Error(w, "Error saving images to gallery", http.StatusInternalServerError)
		return
	}

	// Odpowiedź JSON z informacjami o obrazie
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(image)
}

// getBackgroundsHandler
//
// @Summary Pobiera listę dostępnych teł.
// @Description Funkcja zwraca listę plików tła znajdujących się w katalogu `uploads/background`.
// @Tags Backgrounds
// @Produce application/json
// @Success 200 {array} string "Lista plików teł"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/backgrounds [get]
func getBackgroundsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	backgroundDir := "uploads/background"

	files, err := os.ReadDir(backgroundDir)
	if err != nil {
		http.Error(w, "Error reading background directory", http.StatusInternalServerError)
		return
	}

	var backgrounds []string
	for _, file := range files {
		if !file.IsDir() {
			backgrounds = append(backgrounds, file.Name())
		}
	}

	json.NewEncoder(w).Encode(backgrounds)
}

// saveImageWithBackgroundHandler
//
// @Summary Zapisuje obraz z zastosowanym tłem.
// @Description Funkcja zapisuje edytowany obraz z tłem w katalogu użytkownika i aktualizuje dane galerii obrazów.
// @Tags Backgrounds
// @Accept multipart/form-data
// @Produce application/json
// @Param image formData file true "Plik obrazu do zapisania"
// @Success 200 {object} Image "Informacje o zapisanym obrazie"
// @Failure 400 {string} string "Błąd parsowania danych formularza"
// @Failure 401 {string} string "Brak autoryzacji"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/save-image-with-background [post]
func saveImageWithBackgroundHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		return
	}

	file, handler, err := r.FormFile("image")
	if err != nil {
		http.Error(w, "Error retrieving file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	userDir := filepath.Join("uploads", userID)
	err = os.MkdirAll(userDir, os.ModePerm)
	if err != nil {
		http.Error(w, "Error creating user directory", http.StatusInternalServerError)
		return
	}

	maskedFileName := fmt.Sprintf("edited_%s", handler.Filename)
	filePath := filepath.Join(userDir, maskedFileName)

	if _, err := os.Stat(filePath); err == nil {
		timestamp := time.Now().Format("0405")
		maskedFileName = fmt.Sprintf("edited_duplikat_%s_%s", timestamp, handler.Filename)
		filePath = filepath.Join(userDir, maskedFileName)
	}

	out, err := os.Create(filePath)
	if err != nil {
		http.Error(w, "Error saving file", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	_, err = io.Copy(out, file)
	if err != nil {
		http.Error(w, "Error writing to file", http.StatusInternalServerError)
		return
	}

	images, _ := loadImages()
	for _, img := range images[userID] {
		if img.Filename == maskedFileName {
			http.Error(w, "Duplicate entry in gallery", http.StatusConflict)
			return
		}
	}

	image := Image{
		Filename: maskedFileName,
		URL:      fmt.Sprintf("http://localhost:8000/uploads/%s/%s", userID, maskedFileName),
		UserID:   userID,
	}
	images[userID] = append(images[userID], image)

	err = saveImages(images)
	if err != nil {
		http.Error(w, "Error saving images to gallery", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(image)
}

// loadUsers
//
// @Summary Ładuje listę użytkowników.
// @Description Funkcja odczytuje listę użytkowników z pliku `users.json`.
// @Tags Users
// @Produce application/json
// @Success 200 {array} User "Lista użytkowników"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/users [get]
func loadUsers() ([]User, error) {
	file, err := os.Open("users.json")
	if err != nil {
		if os.IsNotExist(err) {
			return []User{}, nil
		}
		return nil, err
	}
	defer file.Close()

	var users []User
	if err := json.NewDecoder(file).Decode(&users); err != nil {
		return nil, err
	}
	return users, nil
}

// saveUsers
//
// @Summary Zapisuje listę użytkowników.
// @Description Funkcja zapisuje zaktualizowaną listę użytkowników do pliku `users.json`.
// @Tags Users
// @Accept json
// @Produce json
// @Success 200 {string} string "Użytkownicy zapisani pomyślnie"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/users [post]
func saveUsers(users []User) error {
	file, err := os.Create("users.json")
	if err != nil {
		return err
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	return encoder.Encode(users)
}

// RegisterHandler
//
// @Summary Rejestruje nowego użytkownika.
// @Description Funkcja umożliwia rejestrację użytkownika, tworzy dla niego katalog oraz aktualizuje dane w galerii obrazów.
// @Tags Users
// @Accept json
// @Produce application/json
// @Param user body User true "Dane użytkownika"
// @Success 201 {object} map[string]string "Użytkownik został pomyślnie utworzony"
// @Failure 400 {string} string "Nieprawidłowe dane wejściowe"
// @Failure 409 {string} string "Użytkownik o podanej nazwie już istnieje"
// @Failure 500 {string} string "Błąd wewnętrzny serwera"
// @Router /api/register [post]
func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	var user User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil || user.Username == "" || user.Password == "" {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	users, err := loadUsers()
	if err != nil {
		http.Error(w, "Error loading users", http.StatusInternalServerError)
		return
	}

	for _, u := range users {
		if u.Username == user.Username {
			http.Error(w, "Username already exists", http.StatusConflict)
			return
		}
	}

	user.ID = fmt.Sprintf("user-%d", len(users)+1)
	users = append(users, user)
	if err := saveUsers(users); err != nil {
		http.Error(w, "Error saving user", http.StatusInternalServerError)
		return
	}

	userDir := filepath.Join("uploads", user.ID)
	if err := os.MkdirAll(userDir, os.ModePerm); err != nil {
		http.Error(w, "Error creating user directory", http.StatusInternalServerError)
		return
	}

	images, err := loadImages()
	if err != nil {
		http.Error(w, "Error loading gallery", http.StatusInternalServerError)
		return
	}
	images[user.ID] = []Image{}
	if err := saveImages(images); err != nil {
		http.Error(w, "Error saving gallery", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User created successfully"})
}
