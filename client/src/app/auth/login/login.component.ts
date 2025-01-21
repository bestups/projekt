import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginRequest } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,  HttpClientModule], // Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Login successful!';
          localStorage.setItem('authToken', response.token || '');
          this.router.navigate(['/gallery']); // Redirect to gallery
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