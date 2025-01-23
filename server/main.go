package main

import (
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
	os.MkdirAll("uploads", os.ModePerm)

	// Inicjalizacja routera
	r := mux.NewRouter()

	// Definiowanie tras

	// @summary Logowanie użytkownika.
	// @description Endpoint do logowania użytkownika na podstawie przesłanych danych (nazwa użytkownika, hasło).
	// @tags Auth
	// @accept json
	// @produce json
	// @param LoginRequest body LoginRequest true "Dane logowania"
	// @success 200 {object} LoginResponse "Sukces logowania"
	// @failure 401 {string} string "Nieautoryzowany"
	// @failure 500 {string} string "Błąd serwera"
	// @router /login [post]
	r.HandleFunc("/api/login", LoginHandler).Methods("POST")

	// @summary Przesyłanie plików.
	// @description Endpoint do przesyłania plików przez użytkownika.
	// @tags Files
	// @accept multipart/form-data
	// @param image formData file true "Plik obrazu"
	// @success 200 {string} string "Plik przesłany pomyślnie"
	// @failure 400 {string} string "Błąd przesyłania pliku"
	// @router /upload [post]
	r.HandleFunc("/api/upload", UploadHandler).Methods("POST")

	// @summary Pobieranie listy obrazów.
	// @description Endpoint zwracający listę obrazów przesłanych przez użytkownika.
	// @tags Files
	// @produce json
	// @success 200 {array} Image "Lista obrazów użytkownika"
	// @failure 500 {string} string "Błąd serwera"
	// @router /images [get]
	r.HandleFunc("/api/images", GetImagesHandler).Methods("GET")

	// @summary Zmiana nazwy pliku.
	// @description Endpoint do zmiany nazwy przesłanego pliku.
	// @tags Files
	// @accept json
	// @param RenameRequest body RenameRequest true "Dane do zmiany nazwy pliku"
	// @success 200 {string} string "Plik został pomyślnie zaktualizowany"
	// @failure 400 {string} string "Nieprawidłowe dane"
	// @router /rename [post]
	r.HandleFunc("/api/rename", RenameHandler).Methods("POST")

	// @summary Usuwanie plików.
	// @description Endpoint do usuwania plików przesłanych przez użytkownika.
	// @tags Files
	// @accept json
	// @param DeleteRequest body DeleteRequest true "Dane do usunięcia pliku"
	// @success 200 {string} string "Plik został usunięty"
	// @failure 400 {string} string "Nieprawidłowe dane"
	// @failure 500 {string} string "Błąd serwera"
	// @router /delete [post]
	r.HandleFunc("/api/delete", DeleteHandler).Methods("POST")

	// @summary Edytowanie obrazu.
	// @description Endpoint do edycji obrazu użytkownika.
	// @tags Files
	// @accept multipart/form-data
	// @param image formData file true "Obraz do edycji"
	// @success 200 {string} string "Obraz został pomyślnie zapisany"
	// @failure 400 {string} string "Błąd edycji obrazu"
	// @router /edit [post]
	r.HandleFunc("/api/edit", EditHandler).Methods("POST")

	// @summary Zapisanie edytowanego obrazu.
	// @description Endpoint do zapisywania obrazu po jego edycji.
	// @tags Files
	// @accept multipart/form-data
	// @param image formData file true "Obraz do zapisania"
	// @success 200 {string} string "Obraz został zapisany"
	// @failure 400 {string} string "Błąd zapisywania obrazu"
	// @router /save-edited-image [post]
	r.HandleFunc("/api/save-edited-image", saveEditedImageHandler).Methods("POST")

	// @summary Zapisanie obrazu z tłem.
	// @description Endpoint do zapisywania obrazu z wybranym tłem.
	// @tags Backgrounds
	// @accept multipart/form-data
	// @param image formData file true "Obraz z tłem"
	// @success 200 {string} string "Obraz z tłem został zapisany"
	// @failure 400 {string} string "Błąd zapisywania obrazu"
	// @router /save-image-with-background [post]
	r.HandleFunc("/api/save-image-with-background", saveImageWithBackgroundHandler).Methods("POST")

	// @summary Pobranie dostępnych teł.
	// @description Endpoint zwracający listę dostępnych teł.
	// @tags Backgrounds
	// @produce json
	// @success 200 {array} string "Lista dostępnych teł"
	// @failure 500 {string} string "Błąd serwera"
	// @router /backgrounds [get]
	r.HandleFunc("/api/backgrounds", getBackgroundsHandler).Methods("GET")

	// @summary Rejestracja użytkownika.
	// @description Endpoint do rejestrowania nowego użytkownika.
	// @tags Users
	// @accept json
	// @param User body User true "Dane nowego użytkownika"
	// @success 201 {string} string "Użytkownik został zarejestrowany"
	// @failure 400 {string} string "Nieprawidłowe dane wejściowe"
	// @failure 409 {string} string "Użytkownik już istnieje"
	// @router /register [post]
	r.HandleFunc("/api/register", RegisterHandler).Methods("POST")

	// Konfiguracja Swagger UI
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	// Serwowanie plików z katalogu uploads
	r.PathPrefix("/uploads/").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))

	// Konfiguracja CORS
	corsHandler := cors.AllowAll().Handler(r)

	// Start serwera
	http.ListenAndServe(":8000", corsHandler)
}
