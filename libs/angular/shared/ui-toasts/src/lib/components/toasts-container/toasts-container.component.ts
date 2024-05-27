import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsService } from '../../services/toasts.service';
import { ToastsListComponent } from '../toasts-list/toasts-list.component';

@Component({
  selector: 'gv-cv-toasts-container',
  standalone: true,
  imports: [CommonModule, ToastsListComponent],
  templateUrl: './toasts-container.component.html',
  styleUrl: './toasts-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastsContainerComponent {
  protected toastsService = inject(ToastsService);
}
