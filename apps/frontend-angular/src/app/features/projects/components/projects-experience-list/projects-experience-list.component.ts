import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '../../../../ui/components/time-span';
import { SkillsChipsListComponent } from '../../../skills/components/skills-chips-list';
import { NgClass } from '@angular/common';
import { ProjectExperience } from '@gv-cv/shared-util-types';

@Component({
  selector: 'app-projects-experience-list',
  standalone: true,
  imports: [TimeSpanComponent, SkillsChipsListComponent, NgClass],
  templateUrl: './projects-experience-list.component.html',
  styleUrl: './projects-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsExperienceListComponent {
  @Input({ required: true }) data: ProjectExperience[] = [];
}