import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '@gv-cv/angular-ui-timespan';
import { NgClass } from '@angular/common';
import { ProjectExperience } from '@gv-cv/shared-util-types';
import { SkillsChipsListComponent } from '@gv-cv/angular-ui-cv-skills';

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
