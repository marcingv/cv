import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EducationExperience } from '../../domain/models';
import { TimeSpanComponent } from '../../ui/time-span';

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
