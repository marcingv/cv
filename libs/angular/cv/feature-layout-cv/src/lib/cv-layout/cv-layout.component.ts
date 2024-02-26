import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangPickerComponent } from '@gv-cv/angular-feature-translations';

@Component({
  selector: 'gv-cv-cv-layout',
  standalone: true,
  imports: [RouterOutlet, LangPickerComponent],
  templateUrl: './cv-layout.component.html',
  styleUrl: './cv-layout.component.scss',
})
export class CvLayoutComponent {}
