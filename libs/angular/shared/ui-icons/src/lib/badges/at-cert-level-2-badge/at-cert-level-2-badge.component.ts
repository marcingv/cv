import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseImageBadgeComponent } from '../base-image-badge-component';

@Component({
  selector: 'gv-cv-at-cert-level-2-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './at-cert-level-2-badge.component.html',
  styleUrl: './at-cert-level-2-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtCertLevel2BadgeComponent extends BaseImageBadgeComponent {
  protected override getImageUrl(): string {
    return '/assets/badges/certification-badge-level-2.png';
  }

  protected override getImageAltText(): string {
    return 'Certification Badge Level 2';
  }
}
