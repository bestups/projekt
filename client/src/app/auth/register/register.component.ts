import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

/**
 * Component for handling user registration functionality.
 * Provides a registration form and redirects the user to the login page upon successful registration.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  /**
   * User data entered in the registration form.
   * Includes username and password.
   */
  user = {
    username: '',
    password: '',
  };

  /**
   * Message to display feedback to the user about the registration status.
   */
  message: string = '';

  /**
   * Constructor for the RegisterComponent.
   * @param http The HTTP client used for making registration requests.
   * @param router The router used for navigation after successful registration.
   */
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Handle the user registration process.
   * Sends the user data to the backend and navigates to the login page on success.
   * Displays an appropriate message based on the registration result or errors.
   */
  onRegister(): void {
    this.http.post('http://localhost:8000/api/register', this.user).subscribe({
      /**
       * Handles successful registration.
       * @param response The response returned by the backend after registration.
       */
      next: (response: any) => {
        this.message = response.message;
        alert('Registration successful! Redirecting to login...');
        this.router.navigate(['/login']); // Redirect to the login page
      },

      /**
       * Handles registration errors.
       * @param error The error object returned by the backend or the HTTP request.
       */
      error: (error) => {
        this.message = error.error || 'Registration failed!';
      },
    });
  }
}
