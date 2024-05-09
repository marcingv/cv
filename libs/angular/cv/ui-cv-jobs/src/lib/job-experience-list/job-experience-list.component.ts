import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TimeSpanComponent,
  TimeSpanDurationPipe,
} from '@gv-cv/angular-ui-timespan';
import { NgClass } from '@angular/common';
import { JobExperience } from '@gv-cv/shared-util-types';
import { SkillsChipsListComponent } from '@gv-cv/angular-ui-cv-skills';

@Component({
  selector: 'gv-cv-job-experience-list',
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
  @Input() public showUsedSkills = false;
}
