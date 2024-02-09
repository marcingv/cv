import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeData } from '@app/domain/models';
import { CvSectionComponent } from '@app/ui/components/cv-section';
import { ContactDetailsComponent } from '../contact-details';
import { NgOptimizedImage } from '@angular/common';

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
