import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeData } from '../../domain/models';
import { CvSectionComponent } from '../../ui/cv-section';
import { SkillsChipsListComponent } from '../../ui/skills-chips-list';
import { GroupedSkillsListComponent } from '../../ui/grouped-skills-list';

@Component({
  selector: 'app-profile-about',
  standalone: true,
  imports: [
    CvSectionComponent,
    SkillsChipsListComponent,
    GroupedSkillsListComponent,
  ],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  @Input({ required: true }) public profile!: EmployeeData;
}
