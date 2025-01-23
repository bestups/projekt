import { Component } from '@angular/core';

/**
 * Component for displaying the home page of the application.
 * This is a standalone component, meaning it doesn't require a module declaration.
 */
@Component({
  selector: 'app-home', // Matches <app-home> in HTML
  standalone: true,     // Marks this component as standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
