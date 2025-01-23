import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Router, RouterModule  } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,  HttpClientModule , RouterModule], // Import necessary modules
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: ''
  };
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    this.http.post('http://localhost:8000/api/register', this.user).subscribe({
      next: (response: any) => {
        this.message = response.message;
        alert('Registration successful! Redirecting to login...');
        this.router.navigate(['/login']); // Przekierowanie na stronę logowania
      },
      error: (error) => {
        this.message = error.error || 'Registration failed!';
      }
    });
  }
}
