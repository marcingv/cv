import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cv-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cv-layout.component.html',
  styleUrl: './cv-layout.component.scss',
})
export class CvLayoutComponent {}
