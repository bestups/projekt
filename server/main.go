package main

import (
	"net/http"
	"os"

	_ "server/docs"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	httpSwagger "github.com/swaggo/http-swagger"
)

func main() {
	// Tworzenie katalogu na pliki
	os.MkdirAll("uploads", os.ModePerm)

	// Inicjalizacja routera
	r := mux.NewRouter()

	// Definiowanie tras
	r.HandleFunc("/api/login", LoginHandler).Methods("POST")
	r.HandleFunc("/api/upload", UploadHandler).Methods("POST")
	r.HandleFunc("/api/images", GetImagesHandler).Methods("GET")
	r.HandleFunc("/api/rename", RenameHandler).Methods("POST")
	r.HandleFunc("/api/delete", DeleteHandler).Methods("POST")
	r.HandleFunc("/api/edit", EditHandler).Methods("POST")
	r.HandleFunc("/api/save-edited-image", saveEditedImageHandler).Methods("POST")                  // Istniejąca funkcja
	r.HandleFunc("/api/save-image-with-background", saveImageWithBackgroundHandler).Methods("POST") // Nowa funkcja
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)
	r.PathPrefix("/uploads/").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))
	r.HandleFunc("/api/backgrounds", getBackgroundsHandler).Methods("GET")

	// Konfiguracja CORS
	corsHandler := cors.AllowAll().Handler(r)

	// Start serwera
	http.ListenAndServe(":8000", corsHandler)
}
