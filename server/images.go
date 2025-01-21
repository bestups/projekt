package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

func UploadHandler(w http.ResponseWriter, r *http.Request) {
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

func GetImagesHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	images, _ := loadImages()
	json.NewEncoder(w).Encode(images[userID])
}

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
