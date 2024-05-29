import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-icon-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-loading.component.html',
  styleUrl: './icon-loading.component.css',
})
export class IconLoadingComponent extends BaseIconComponent {}
