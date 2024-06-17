import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BaseImageBadgeComponent } from '../base-image-badge-component';

@Component({
  selector: 'gv-cv-at-cert-level-1-badge',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './at-cert-level-1-badge.component.html',
  styleUrl: './at-cert-level-1-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtCertLevel1BadgeComponent extends BaseImageBadgeComponent {
  protected override getImageUrl(): string {
    return '/assets/badges/certification-badge-level-1.webp';
  }

  protected override getImageAltText(): string {
    return 'Certification Badge Level 1';
  }

  protected override getImageTitleText(): string {
    return 'Certified by GDEs as Junior Angular Developer';
  }
}
