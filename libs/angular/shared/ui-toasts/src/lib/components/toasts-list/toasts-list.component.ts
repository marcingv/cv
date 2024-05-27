import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessage } from '../../models/toast-message';
import { ToastListItemComponent } from '../toast-list-item/toast-list-item.component';

@Component({
  selector: 'gv-cv-toasts-list',
  standalone: true,
  imports: [CommonModule, ToastListItemComponent],
  templateUrl: './toasts-list.component.html',
  styleUrl: './toasts-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastsListComponent {
  @Input({ required: true }) public messages: ToastMessage[] = [];
}
