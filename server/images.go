package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

// RenameRequest represents the payload for renaming a file.
type RenameRequest struct {
	Filename string `json:"filename"` // Original file name
	NewName  string `json:"newName"`  // New file name
}

// DeleteRequest represents the payload for deleting a file.
type DeleteRequest struct {
	Filename string `json:"filename"` // File name to delete
}

// UploadHandler
//
// @Summary Przesyłanie plików.
// @Description Endpoint umożliwia przesłanie pliku obrazu przez użytkownika.
// @Tags Files
// @Accept multipart/form-data
// @Produce application/json
// @Param image formData file true "Plik obrazu"
// @Success 200 {object} Image "Informacje o przesłanym obrazie"
// @Failure 400 {string} string "Błąd przesyłania pliku"
// @Failure 401 {string} string "Brak autoryzacji"
// @Failure 500 {string} string "Błąd zapisu pliku"
// @Router /upload [post]
func UploadHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	r.ParseMultipartForm(10 << 20)
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
	os.MkdirAll(userDir, os.ModePerm)

	filePath := filepath.Join(userDir, handler.Filename)
	out, err := os.Create(filePath)
	if err != nil {
		http.Error(w, "Error saving file", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	io.Copy(out, file)

	images, _ := loadImages()
	image := Image{
		Filename: handler.Filename,
		URL:      fmt.Sprintf("http://localhost:8000/uploads/%s/%s", userID, handler.Filename),
		UserID:   userID,
	}
	images[userID] = append(images[userID], image)
	saveImages(images)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(image)
}

// GetImagesHandler
//
// @Summary Pobiera listę obrazów użytkownika.
// @Description Endpoint zwraca wszystkie obrazy przesłane przez użytkownika.
// @Tags Files
// @Produce application/json
// @Success 200 {array} Image "Lista obrazów"
// @Failure 401 {string} string "Brak autoryzacji"
// @Router /images [get]
func GetImagesHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	images, _ := loadImages()
	json.NewEncoder(w).Encode(images[userID])
}

// RenameHandler
//
// @Summary Zmienia nazwę pliku.
// @Description Endpoint umożliwia zmianę nazwy przesłanego pliku obrazu.
// @Tags Files
// @Accept json
// @Produce application/json
// @Param request body RenameRequest true "Nowa nazwa pliku"
// @Success 200 {string} string "Nazwa pliku została pomyślnie zmieniona"
// @Failure 400 {string} string "Nieprawidłowe dane"
// @Failure 401 {string} string "Brak autoryzacji"
// @Failure 500 {string} string "Błąd serwera"
// @Router /rename [post]
func RenameHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Filename string `json:"filename"`
		NewName  string `json:"newName"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	oldPath := filepath.Join("uploads", userID, req.Filename)
	newPath := filepath.Join("uploads", userID, req.NewName)
	if err := os.Rename(oldPath, newPath); err != nil {
		http.Error(w, "Error renaming file", http.StatusInternalServerError)
		return
	}

	images, _ := loadImages()
	for i, img := range images[userID] {
		if img.Filename == req.Filename {
			images[userID][i].Filename = req.NewName
			images[userID][i].URL = fmt.Sprintf("http://localhost:8000/uploads/%s/%s", userID, req.NewName)
			break
		}
	}
	saveImages(images)

	w.WriteHeader(http.StatusOK)
}

// DeleteHandler
//
// @Summary Usuwa plik.
// @Description Endpoint umożliwia usunięcie pliku obrazu przesłanego przez użytkownika.
// @Tags Files
// @Accept json
// @Param request body DeleteRequest true "Nazwa pliku do usunięcia"
// @Success 200 {string} string "Plik został pomyślnie usunięty"
// @Failure 400 {string} string "Nieprawidłowe dane"
// @Failure 401 {string} string "Brak autoryzacji"
// @Failure 500 {string} string "Błąd usuwania pliku"
// @Router /delete [post]
func DeleteHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Filename string `json:"filename"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	filePath := filepath.Join("uploads", userID, req.Filename)
	if err := os.Remove(filePath); err != nil {
		http.Error(w, "Error deleting file", http.StatusInternalServerError)
		return
	}

	images, _ := loadImages()
	filtered := []Image{}
	for _, img := range images[userID] {
		if img.Filename != req.Filename {
			filtered = append(filtered, img)
		}
	}
	images[userID] = filtered
	saveImages(images)

	w.WriteHeader(http.StatusOK)
}
