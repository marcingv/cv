import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageExperience } from '../../../../domain/models';

@Component({
  selector: 'app-languages-experience-list',
  standalone: true,
  imports: [],
  templateUrl: './languages-experience-list.component.html',
  styleUrl: './languages-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesExperienceListComponent {
  @Input({ required: true }) data: LanguageExperience[] = [];
}
