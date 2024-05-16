import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconArrowDownTrayComponent } from '@gv-cv/angular-ui-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-bouncing-button',
  standalone: true,
  imports: [CommonModule, IconArrowDownTrayComponent, TranslateModule],
  templateUrl: './bouncing-button.component.html',
  styleUrl: './bouncing-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BouncingButtonComponent {
  @Input() public disabled = false;
  @Input() public title?: string;
  @Input() public label?: string;
  @Output() public clicked = new EventEmitter<void>();
}
