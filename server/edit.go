package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

func EditHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Failed to parse form data", http.StatusBadRequest)
		return
	}

	file, handler, err := r.FormFile("image")
	if err != nil {
		http.Error(w, "Failed to retrieve file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	userID := r.Header.Get("Authorization")
	if userID == "" {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	savePath := filepath.Join("uploads", userID, handler.Filename)
	out, err := os.Create(savePath)
	if err != nil {
		http.Error(w, "Failed to save the file", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	io.Copy(out, file)

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Edited image saved successfully: %s", savePath)
}
