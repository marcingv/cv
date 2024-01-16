import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectExperience } from '../../domain/models';
import { TimeSpanComponent } from '../../ui/time-span';
import { SkillsChipsListComponent } from '../../ui/skills-chips-list';
import { NgClass } from '@angular/common';

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
