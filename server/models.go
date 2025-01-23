package main

// User
//
// @Summary Reprezentuje użytkownika w systemie.
// @Description Struktura przechowuje dane użytkownika, w tym jego ID, nazwę użytkownika i hasło.
// @Tags Models
type User struct {
	ID       string `json:"id,omitempty"`       // ID użytkownika, opcjonalne.
	Username string `json:"username,omitempty"` // Nazwa użytkownika.
	Password string `json:"password,omitempty"` // Hasło użytkownika.
}

// LoginRequest
//
// @Summary Reprezentuje dane przesłane podczas żądania logowania.
// @Description Struktura zawiera nazwę użytkownika i hasło przesyłane w żądaniu.
// @Tags Models
type LoginRequest struct {
	Username string `json:"username"` // Nazwa użytkownika.
	Password string `json:"password"` // Hasło użytkownika.
}

// LoginResponse
//
// @Summary Reprezentuje odpowiedź na żądanie logowania.
// @Description Struktura zwraca informacje o wyniku logowania, w tym status sukcesu, wiadomość i token.
// @Tags Models
type LoginResponse struct {
	Success bool   `json:"success"`         // Status sukcesu logowania.
	Message string `json:"message"`         // Wiadomość opisująca wynik logowania.
	Token   string `json:"token,omitempty"` // Token autoryzacyjny, opcjonalny.
}

// Image
//
// @Summary Reprezentuje metadane obrazu przesłanego przez użytkownika.
// @Description Struktura przechowuje informacje o nazwie pliku, URL oraz ID użytkownika, do którego należy obraz.
// @Tags Models
type Image struct {
	Filename string `json:"filename"` // Nazwa pliku obrazu.
	URL      string `json:"url"`      // URL obrazu.
	UserID   string `json:"userId"`   // ID użytkownika, do którego należy obraz.
}
