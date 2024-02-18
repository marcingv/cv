import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gv-cv-error-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLayoutComponent {}
