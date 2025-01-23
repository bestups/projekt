package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// LoginHandler
//
// @Summary Logowanie użytkownika.
// @Description Endpoint umożliwia logowanie użytkownika na podstawie nazwy użytkownika i hasła. Zwraca token autoryzacyjny w przypadku powodzenia.
// @Tags Auth
// @Accept json
// @Produce json
// @Param request body LoginRequest true "Dane logowania użytkownika"
// @Success 200 {object} LoginResponse "Sukces logowania z tokenem"
// @Failure 400 {string} string "Nieprawidłowe dane wejściowe"
// @Failure 401 {string} string "Nieprawidłowa nazwa użytkownika lub hasło"
// @Failure 500 {string} string "Błąd serwera podczas ładowania użytkowników"
// @Router /login [post]
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	users, err := loadUsers() // Ładowanie użytkowników z pliku JSON
	if err != nil {
		http.Error(w, "Failed to load users", http.StatusInternalServerError)
		return
	}

	for _, user := range users {
		if user.Username == req.Username && user.Password == req.Password {
			// Token zawierający userID
			token := fmt.Sprintf("user-%s", user.ID)
			json.NewEncoder(w).Encode(LoginResponse{
				Success: true,
				Message: "Login successful",
				Token:   token,
			})
			return
		}
	}

	http.Error(w, "Invalid username or password", http.StatusUnauthorized)
}
