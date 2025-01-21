import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importuj CommonModule
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css']
})
export class EditComponent {
  imageUrl: string | null = null;
  imageFilename: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.imageUrl = params['url'];
      this.imageFilename = params['filename'];
    });
  }
}
