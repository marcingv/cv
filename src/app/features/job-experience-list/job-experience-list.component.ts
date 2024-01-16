import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobExperience } from '../../domain/models';
import { SkillsChipsListComponent } from '../../ui/skills-chips-list';
import { TimeSpanComponent } from '../../ui/time-span';
import { TimeSpanDurationPipe } from '../../ui/pipes';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-job-experience-list',
  standalone: true,
  imports: [
    SkillsChipsListComponent,
    TimeSpanComponent,
    TimeSpanDurationPipe,
    NgClass,
  ],
  templateUrl: './job-experience-list.component.html',
  styleUrl: './job-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobExperienceListComponent {
  @Input() public data: JobExperience[] = [];
}
