import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedPhonePipe } from '../../pipes';
import {
  IconEyeComponent,
  IconEyeSlashComponent,
} from '@gv-cv/angular-ui-icons';

@Component({
  selector: 'gv-cv-masked-phone',
  standalone: true,
  imports: [
    CommonModule,
    MaskedPhonePipe,
    IconEyeSlashComponent,
    IconEyeComponent,
  ],
  templateUrl: './masked-phone.component.html',
  styleUrl: './masked-phone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaskedPhoneComponent {
  @Input({ required: true }) public phone!: string;

  public isMasked = true;

  public toggleMask(): void {
    this.isMasked = !this.isMasked;
  }
}
