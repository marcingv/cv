import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AtCertLevel1BadgeComponent,
  AtCertLevel2BadgeComponent,
  AtCertLevel3BadgeComponent,
} from '@gv-cv/angular-ui-icons';
import { Course } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-leading-certification-badge',
  standalone: true,
  imports: [
    CommonModule,
    AtCertLevel2BadgeComponent,
    AtCertLevel1BadgeComponent,
    AtCertLevel3BadgeComponent,
  ],
  templateUrl: './leading-certification-badge.component.html',
  styleUrl: './leading-certification-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadingCertificationBadgeComponent {
  @Input({ required: true }) public certificate!: Course;

  @HostBinding('class') private class = 'inline-flex';
}
