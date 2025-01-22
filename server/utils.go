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

func loadImages() (map[string][]Image, error) {
	mutex.Lock()
	defer mutex.Unlock()

	if _, err := os.Stat(storageFile); os.IsNotExist(err) {
		// Jeśli plik nie istnieje, zwróć pustą mapę
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

	//fmt.Printf("Loaded images from gallery.json: %v\n", images) //Debug
	return images, nil
}

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
	encoder.SetIndent("", "  ") // Lepszy format JSON dla czytelności
	err = encoder.Encode(images)
	if err != nil {
		fmt.Printf("Error encoding gallery file: %v\n", err)
		return err
	}

	//fmt.Println("Gallery successfully saved to gallery.json") //Debug
	return nil
}

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

func getBackgroundsHandler(w http.ResponseWriter, r *http.Request) {
	// Ustaw nagłówki CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// Folder z tłami
	backgroundDir := "uploads/background"

	// Otwórz katalog z tłami
	files, err := os.ReadDir(backgroundDir)
	if err != nil {
		http.Error(w, "Error reading background directory", http.StatusInternalServerError)
		return
	}

	// Iteracja po plikach i zbieranie nazw plików
	var backgrounds []string
	for _, file := range files {
		if !file.IsDir() {
			backgrounds = append(backgrounds, file.Name())
		}
	}

	// Zwrócenie listy teł jako JSON
	json.NewEncoder(w).Encode(backgrounds)

}
func saveImageWithBackgroundHandler(w http.ResponseWriter, r *http.Request) {
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

	// Nadanie unikalnej nazwy pliku z prefiksem "edited_"
	maskedFileName := fmt.Sprintf("edited_%s", handler.Filename)
	filePath := filepath.Join(userDir, maskedFileName)

	// Sprawdzenie, czy plik już istnieje
	if _, err := os.Stat(filePath); err == nil {
		// Jeśli plik istnieje, dodaj unikalny znacznik czasu do nazwy
		timestamp := time.Now().Format("0405")
		maskedFileName = fmt.Sprintf("edited_duplikat_%s_%s", timestamp, handler.Filename)
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
