package main

// User represents a user in the system.
type User struct {
	ID       string `json:"id,omitempty"`
	Username string `json:"username,omitempty"`
	Password string `json:"password,omitempty"`
}

// LoginRequest represents the payload for a login request.
type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// LoginResponse represents the payload for a login response.
type LoginResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Token   string `json:"token,omitempty"`
}

// Image represents the metadata for an image uploaded by a user.
type Image struct {
	Filename string `json:"filename"`
	URL      string `json:"url"`
	UserID   string `json:"userId"`
}
