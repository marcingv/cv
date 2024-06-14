import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details';
import { NgOptimizedImage } from '@angular/common';
import { CvSectionComponent } from '@gv-cv/angular-ui-cv-section';
import { EmployeeData } from '@gv-cv/shared-util-types';
import { AtCertLevel2BadgeComponent } from '@gv-cv/angular-ui-icons';

@Component({
  selector: 'gv-cv-profile-about',
  standalone: true,
  imports: [
    CvSectionComponent,
    ContactDetailsComponent,
    NgOptimizedImage,
    AtCertLevel2BadgeComponent,
  ],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  @Input({ required: true }) public profile!: EmployeeData;
}
