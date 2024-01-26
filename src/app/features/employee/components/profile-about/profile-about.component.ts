import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeData } from '../../../../domain/models';
import { CvSectionComponent } from '../../../../ui/components/cv-section';
import { SkillsChipsListComponent } from '../../../skills/components/skills-chips-list';
import { GroupedSkillsListComponent } from '../../../skills/components/grouped-skills-list';
import { ContactDetailsComponent } from '../contact-details';

@Component({
  selector: 'app-profile-about',
  standalone: true,
  imports: [
    CvSectionComponent,
    SkillsChipsListComponent,
    GroupedSkillsListComponent,
    ContactDetailsComponent,
  ],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  @Input({ required: true }) public profile!: EmployeeData;
}
