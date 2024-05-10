import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-logo-oracle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-oracle.component.html',
  styleUrl: './logo-oracle.component.css',
})
export class LogoOracleComponent extends BaseIconComponent {}
