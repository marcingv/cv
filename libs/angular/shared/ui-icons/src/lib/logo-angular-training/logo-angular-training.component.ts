import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseIconComponent } from '../base-icon.component';

@Component({
  selector: 'gv-cv-logo-angular-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-angular-training.component.html',
  styleUrl: './logo-angular-training.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoAngularTrainingComponent extends BaseIconComponent {}
