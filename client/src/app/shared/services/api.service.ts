import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interface representing a User object.
 */
export interface User {
  /**
   * The unique identifier for the user.
   */
  id?: string;

  /**
   * The name of the user.
   */
  name: string;

  /**
   * The email address of the user.
   */
  email: string;
}

/**
 * Service for managing API interactions related to users.
 * Provides methods for CRUD operations on user data.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Base URL for the user API endpoints.
   */
  private apiUrl = 'http://localhost:8000/api/users';

  /**
   * Constructor for the ApiService.
   * @param http The HTTP client for making requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches a list of all users from the API.
   * @returns An Observable containing an array of users.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Fetches a single user by their ID.
   * @param id The ID of the user to fetch.
   * @returns An Observable containing the user data.
   */
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  /**
   * Adds a new user to the database.
   * @param user The user object to add.
   * @returns An Observable containing the added user.
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Updates an existing user in the database.
   * @param id The ID of the user to update.
   * @param user The updated user object.
   * @returns An Observable containing the updated user.
   */
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  /**
   * Deletes a user from the database.
   * @param id The ID of the user to delete.
   * @returns An Observable indicating the operation's completion.
   */
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
