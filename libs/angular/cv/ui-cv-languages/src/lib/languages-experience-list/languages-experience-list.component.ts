import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageExperience } from '@gv-cv/shared-util-types';
import { LanguageLevelDescriptionPipe, LanguageLevelLabelPipe } from '../pipes';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-languages-experience-list',
  standalone: true,
  imports: [
    LanguageLevelLabelPipe,
    TranslateModule,
    LanguageLevelDescriptionPipe,
  ],
  templateUrl: './languages-experience-list.component.html',
  styleUrl: './languages-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesExperienceListComponent {
  @Input({ required: true }) data: LanguageExperience[] = [];
}
