import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '../../../../ui/components/time-span';
import { EducationExperience } from '@gv-cv/data-models';

@Component({
  selector: 'app-education-experience-list',
  standalone: true,
  imports: [TimeSpanComponent],
  templateUrl: './education-experience-list.component.html',
  styleUrl: './education-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationExperienceListComponent {
  @Input() public data: EducationExperience[] = [];
}
