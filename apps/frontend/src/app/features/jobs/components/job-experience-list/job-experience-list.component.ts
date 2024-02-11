import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillsChipsListComponent } from '../../../skills/components/skills-chips-list';
import { TimeSpanComponent } from '../../../../ui/components/time-span';
import { TimeSpanDurationPipe } from '../../../../ui/pipes';
import { NgClass } from '@angular/common';
import { JobExperience } from '@gv-cv/data-models';

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