import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import HomeComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
