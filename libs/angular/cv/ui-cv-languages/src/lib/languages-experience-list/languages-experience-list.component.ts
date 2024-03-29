import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageExperience } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-languages-experience-list',
  standalone: true,
  imports: [],
  templateUrl: './languages-experience-list.component.html',
  styleUrl: './languages-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesExperienceListComponent {
  @Input({ required: true }) data: LanguageExperience[] = [];
}
