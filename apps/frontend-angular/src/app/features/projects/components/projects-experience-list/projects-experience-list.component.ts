import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '@gv-cv/angular-ui-timespan';
import { SkillsChipsListComponent } from '../../../skills/components/skills-chips-list';
import { NgClass } from '@angular/common';
import { ProjectExperience } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-projects-experience-list',
  standalone: true,
  imports: [TimeSpanComponent, SkillsChipsListComponent, NgClass],
  templateUrl: './projects-experience-list.component.html',
  styleUrl: './projects-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsExperienceListComponent {
  @Input({ required: true }) data: ProjectExperience[] = [];
}
