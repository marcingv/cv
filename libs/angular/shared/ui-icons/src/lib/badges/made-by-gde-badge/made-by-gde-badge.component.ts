import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseImageBadgeComponent } from '../base-image-badge-component';

@Component({
  selector: 'gv-cv-made-by-gde-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './made-by-gde-badge.component.html',
  styleUrl: './made-by-gde-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MadeByGdeBadgeComponent extends BaseImageBadgeComponent {
  protected override getImageUrl(): string {
    return '/assets/badges/made-by-angular-GDEs.png';
  }

  protected override getImageAltText(): string {
    return 'Made by Angular GDEs';
  }
}
