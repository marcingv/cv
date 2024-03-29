import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangPickerComponent } from '@gv-cv/angular-feature-translations';

@Component({
  selector: 'gv-cv-error-layout',
  standalone: true,
  imports: [RouterOutlet, LangPickerComponent],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLayoutComponent {
  @HostBinding('class') public hostClass =
    'block bg-pattern-cogs dark:bg-pattern-cogs-dark';
}
