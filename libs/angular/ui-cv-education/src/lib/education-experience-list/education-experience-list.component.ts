import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '@gv-cv/angular-ui-timespan';
import { EducationExperience } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-education-experience-list',
  standalone: true,
  imports: [TimeSpanComponent],
  templateUrl: './education-experience-list.component.html',
  styleUrl: './education-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationExperienceListComponent {
  @Input() public data: EducationExperience[] = [];
}
