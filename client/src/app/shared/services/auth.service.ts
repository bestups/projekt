import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/login'; // Backend login endpoint
  private tokenKey = 'authToken'; // Key for storing the token in localStorage

  constructor(private http: HttpClient) {}

  /**
   * Perform login by sending credentials to the backend.
   * @param credentials - User's login credentials.
   * @returns Observable<LoginResponse> - Login response from the backend.
   */
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials);
  }

  /**
   * Save the token after a successful login.
   * @param token - Authentication token to save.
   */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Retrieve the saved authentication token.
   * @returns string | null - The stored token or null if not present.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Remove the stored authentication token (e.g., on logout).
   */
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Check if the user is logged in by verifying the presence of a token.
   * @returns boolean - True if a token exists, otherwise false.
   */
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  logout(): void {
    localStorage.removeItem('authToken'); // Usuń token z localStorage
  }
  
}
