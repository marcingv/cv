import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details';
import { NgOptimizedImage } from '@angular/common';
import { CvSectionComponent } from '../../../../ui/components/cv-section';
import { EmployeeData } from '@gv-cv/data-models';

@Component({
  selector: 'app-profile-about',
  standalone: true,
  imports: [CvSectionComponent, ContactDetailsComponent, NgOptimizedImage],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  @Input({ required: true }) public profile!: EmployeeData;
}
