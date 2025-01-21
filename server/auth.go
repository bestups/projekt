package main

import (
	"encoding/json"
	"net/http"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	for _, user := range users {
		if user.Username == req.Username && user.Password == req.Password {
			token := "mock-token-for-" + user.ID
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
