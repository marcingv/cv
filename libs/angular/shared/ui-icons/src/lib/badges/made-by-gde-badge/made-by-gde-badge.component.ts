import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BaseImageBadgeComponent } from '../base-image-badge-component';

@Component({
  selector: 'gv-cv-made-by-gde-badge',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './made-by-gde-badge.component.html',
  styleUrl: './made-by-gde-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MadeByGdeBadgeComponent extends BaseImageBadgeComponent {
  protected override getImageUrl(): string {
    return '/assets/badges/made-by-angular-GDEs.webp';
  }

  protected override getImageAltText(): string {
    return 'Made by Angular GDEs';
  }

  protected override getImageTitleText(): string {
    return 'Certified by Angular Google Developer Experts';
  }
}
