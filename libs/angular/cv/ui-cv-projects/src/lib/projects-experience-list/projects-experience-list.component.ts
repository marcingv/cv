import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeSpanComponent } from '@gv-cv/angular-ui-timespan';
import { NgClass } from '@angular/common';
import { ProjectExperience } from '@gv-cv/shared-util-types';
import { SkillsChipsListComponent } from '@gv-cv/angular-ui-cv-skills';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-projects-experience-list',
  standalone: true,
  imports: [
    TimeSpanComponent,
    SkillsChipsListComponent,
    NgClass,
    TranslateModule,
  ],
  templateUrl: './projects-experience-list.component.html',
  styleUrl: './projects-experience-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsExperienceListComponent {
  public readonly RESPONSIBILITIES_LABEL: TranslationKey =
    'projectExperienceLabels.responsibilities';
  public readonly TOOLS_AND_TECH_LABEL: TranslationKey =
    'projectExperienceLabels.toolsAndTech';
  public readonly ROLE_LABEL: TranslationKey = 'projectExperienceLabels.role';

  @Input({ required: true }) data: ProjectExperience[] = [];
}
