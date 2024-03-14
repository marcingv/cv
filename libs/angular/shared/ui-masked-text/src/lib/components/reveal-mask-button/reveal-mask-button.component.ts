import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconEyeComponent,
  IconEyeSlashComponent,
} from '@gv-cv/angular-ui-icons';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-reveal-mask-button',
  standalone: true,
  imports: [
    CommonModule,
    IconEyeComponent,
    IconEyeSlashComponent,
    TranslateModule,
  ],
  templateUrl: './reveal-mask-button.component.html',
  styleUrl: './reveal-mask-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RevealMaskButtonComponent {
  public readonly REVEAL_LABEL: TranslationKey = 'buttonLabels.reveal';
  public readonly COVER_LABEL: TranslationKey = 'buttonLabels.cover';

  @Input() public isMasked = true;
  @Output() public isMaskedChange = new EventEmitter<boolean>();

  public toggleMask(): void {
    this.isMasked = !this.isMasked;
    this.isMaskedChange.next(this.isMasked);
  }
}
