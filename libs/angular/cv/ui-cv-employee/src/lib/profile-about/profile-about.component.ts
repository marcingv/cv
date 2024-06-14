import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details';
import { CvSectionComponent } from '@gv-cv/angular-ui-cv-section';
import { Course, EmployeeData } from '@gv-cv/shared-util-types';
import { LeadingCertificationBadgeComponent } from '../leading-certification-badge';

@Component({
  selector: 'gv-cv-profile-about',
  standalone: true,
  imports: [
    CvSectionComponent,
    ContactDetailsComponent,
    LeadingCertificationBadgeComponent,
  ],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  @Input({ required: true }) public profile!: EmployeeData;
  @Input() public leadingCertificate?: Course;
}
