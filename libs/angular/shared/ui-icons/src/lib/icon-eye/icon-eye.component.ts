import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-icon-eye',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-eye.component.html',
  styleUrl: './icon-eye.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeComponent extends BaseIconComponent {}
