import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../../icons/base-icon.component';

@Component({
  selector: 'gv-cv-logo-udemy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-udemy.component.html',
  styleUrl: './logo-udemy.component.css',
})
export class LogoUdemyComponent extends BaseIconComponent {}
