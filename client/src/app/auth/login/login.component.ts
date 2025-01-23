import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginRequest } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

/**
 * Component for handling user login functionality.
 * Provides a login form and redirects the user upon successful authentication.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  /**
   * Login credentials entered by the user.
   */
  credentials: LoginRequest = { username: '', password: '' };

  /**
   * Message to display feedback to the user about login status.
   */
  message: string = '';

  /**
   * Constructor for the LoginComponent.
   * @param authService The authentication service used for login requests.
   * @param router The router used for navigation after successful login.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Handle the login process.
   * Sends the user's credentials to the authentication service and navigates to the gallery on success.
   * Displays an appropriate message based on the login result or errors.
   */
  onLogin(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Login successful!';
          localStorage.setItem('authToken', response.token || '');
          this.router.navigate(['/gallery']); // Redirect to the gallery page
        } else {
          this.message = 'Login failed: ' + response.message;
        }
      },
      (error) => {
        this.message = 'Error connecting to server.';
      }
    );
  }
}
