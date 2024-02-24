import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconEyeComponent,
  IconEyeSlashComponent,
} from '@gv-cv/angular-ui-icons';
import { MaskedEmailPipe, MaskedPhonePipe } from '../../pipes';
import { RevealMaskButtonComponent } from '../reveal-mask-button/reveal-mask-button.component';

@Component({
  selector: 'gv-cv-masked-email',
  standalone: true,
  imports: [
    CommonModule,
    IconEyeComponent,
    IconEyeSlashComponent,
    MaskedPhonePipe,
    MaskedEmailPipe,
    RevealMaskButtonComponent,
  ],
  templateUrl: './masked-email.component.html',
  styleUrl: './masked-email.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaskedEmailComponent {
  @Input({ required: true }) public email!: string;
}
