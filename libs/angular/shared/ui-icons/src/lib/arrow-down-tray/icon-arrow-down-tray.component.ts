import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-icon-arrow-down-tray',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-arrow-down-tray.component.html',
  styleUrl: './icon-arrow-down-tray.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowDownTrayComponent extends BaseIconComponent {}
