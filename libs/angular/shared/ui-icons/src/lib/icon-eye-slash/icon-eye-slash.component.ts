import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-icon-eye-slash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-eye-slash.component.html',
  styleUrl: './icon-eye-slash.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeSlashComponent extends BaseIconComponent {}
