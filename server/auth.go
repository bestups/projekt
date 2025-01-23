package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

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
