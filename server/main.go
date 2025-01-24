package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/rs/cors"

	_ "server/docs"

	httpSwagger "github.com/swaggo/http-swagger"
)

// @title File Management API
// @version 1.0
// @description API do zarządzania plikami i obrazami użytkowników, w tym przesyłanie, edytowanie oraz rejestrowanie użytkowników.
// @host localhost:8000
// @BasePath /api

func main() {
	// Tworzenie katalogu na pliki
	if err := os.MkdirAll("uploads", os.ModePerm); err != nil {
		log.Fatalf("Nie udało się utworzyć katalogu uploads: %v", err)
	}

	// Inicjalizacja routera
	r := mux.NewRouter()

	// Definiowanie tras
	r.HandleFunc("/api/login", LoginHandler).Methods("POST")
	r.HandleFunc("/api/upload", UploadHandler).Methods("POST")
	r.HandleFunc("/api/images", GetImagesHandler).Methods("GET")
	r.HandleFunc("/api/rename", RenameHandler).Methods("POST")
	r.HandleFunc("/api/delete", DeleteHandler).Methods("POST")
	r.HandleFunc("/api/edit", EditHandler).Methods("POST")
	r.HandleFunc("/api/save-edited-image", saveEditedImageHandler).Methods("POST")
	r.HandleFunc("/api/save-image-with-background", saveImageWithBackgroundHandler).Methods("POST")
	r.HandleFunc("/api/backgrounds", getBackgroundsHandler).Methods("GET")
	r.HandleFunc("/api/register", RegisterHandler).Methods("POST")

	// Konfiguracja Swagger UI
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	// Serwowanie plików z katalogu uploads
	r.PathPrefix("/uploads/").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))

	// Konfiguracja CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // W razie potrzeby ogranicz do określonych domen
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(r)

	// Pobranie portu z ENV lub ustawienie domyślnego
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000" // Domyślny port
	}
	log.Printf("Serwer działa na porcie %s", port)

	// Start serwera
	if err := http.ListenAndServe(":"+port, corsHandler); err != nil {
		log.Fatalf("Nie udało się uruchomić serwera: %v", err)
	}
}
