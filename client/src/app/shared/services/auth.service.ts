import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interface representing a login request.
 */
export interface LoginRequest {
  /**
   * The username or email of the user.
   */
  username: string;

  /**
   * The password of the user.
   */
  password: string;
}

/**
 * Interface representing a login response from the backend.
 */
export interface LoginResponse {
  /**
   * Indicates if the login was successful.
   */
  success: boolean;

  /**
   * A message describing the login result.
   */
  message: string;

  /**
   * The authentication token, if login was successful.
   */
  token?: string;
}

/**
 * Service responsible for handling authentication operations.
 * Includes login, token management, and session checking.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * The API endpoint for login requests.
   */
  private apiUrl = 'http://localhost:8000/api/login';

  /**
   * The key used to store the authentication token in localStorage.
   */
  private tokenKey = 'authToken';

  /**
   * Constructor for the AuthService.
   * @param http The HTTP client for making requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Perform login by sending credentials to the backend.
   * @param credentials The user's login credentials.
   * @returns An Observable containing the login response.
   */
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials);
  }

  /**
   * Save the authentication token after a successful login.
   * @param token The authentication token to save.
   */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Retrieve the saved authentication token from localStorage.
   * @returns The stored token, or null if not present.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Clear the stored authentication token (e.g., on logout).
   */
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Check if the user is logged in by verifying the presence of a token.
   * @returns True if a token exists, otherwise false.
   */
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  /**
   * Perform logout by removing the authentication token.
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
