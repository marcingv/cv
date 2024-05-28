import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastsContainerComponent } from '@gv-cv/angular-ui-toasts';

@Component({
  selector: 'gv-cv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
