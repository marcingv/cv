import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLogoComponent } from '../base-logo.component';

@Component({
  selector: 'gv-cv-logo-oracle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-oracle.component.html',
  styleUrl: './logo-oracle.component.css',
})
export class LogoOracleComponent extends BaseLogoComponent {}
