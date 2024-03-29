import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedPhonePipe } from '../../pipes';
import {
  IconEyeComponent,
  IconEyeSlashComponent,
} from '@gv-cv/angular-ui-icons';
import { RevealMaskButtonComponent } from '../reveal-mask-button/reveal-mask-button.component';

@Component({
  selector: 'gv-cv-masked-phone',
  standalone: true,
  imports: [
    CommonModule,
    MaskedPhonePipe,
    IconEyeSlashComponent,
    IconEyeComponent,
    RevealMaskButtonComponent,
  ],
  templateUrl: './masked-phone.component.html',
  styleUrl: './masked-phone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaskedPhoneComponent {
  @Input({ required: true }) public phone!: string;
}
