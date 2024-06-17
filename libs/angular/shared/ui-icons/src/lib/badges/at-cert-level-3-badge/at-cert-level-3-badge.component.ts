import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BaseImageBadgeComponent } from '../base-image-badge-component';

@Component({
  selector: 'gv-cv-at-cert-level-3-badge',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './at-cert-level-3-badge.component.html',
  styleUrl: './at-cert-level-3-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtCertLevel3BadgeComponent extends BaseImageBadgeComponent {
  protected override getImageUrl(): string {
    return '/assets/badges/certification-badge-level-3.webp';
  }

  protected override getImageAltText(): string {
    return 'Certification Badge Level 3';
  }

  protected override getImageTitleText(): string {
    return 'Certified by GDEs as Expert Angular Developer';
  }
}
