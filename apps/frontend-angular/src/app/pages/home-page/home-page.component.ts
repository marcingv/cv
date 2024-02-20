import { Component, inject, Signal } from '@angular/core';
import { HomePageService } from './home-page.service';
import { ProfileAboutComponent } from '../../features/employee/components/profile-about';
import { CvSectionComponent } from '@gv-cv/angular-ui-cv-section';
import { EducationExperienceListComponent } from '@gv-cv/angular-ui-cv-education';
import { JobExperienceListComponent } from '../../features/jobs/components/job-experience-list';
import { ProjectsExperienceListComponent } from '../../features/projects/components/projects-experience-list';
import { LanguagesExperienceListComponent } from '../../features/languages/components/languages-experience-list';
import { HobbiesListComponent } from '@gv-cv/angular-ui-cv-hobbies';
import { AdditionalSkillsListComponent } from '../../features/skills/components/additional-skills-list';
import { GroupedSkillsListComponent } from '../../features/skills/components/grouped-skills-list';
import { LangPickerComponent } from '@gv-cv/angular-feature-translations';
import { CvData } from '@gv-cv/shared-util-types';
import { PagePdfExportComponent } from '@gv-cv/angular-feature-pdf-export';

@Component({
  selector: 'gv-cv-home-page',
  standalone: true,
  imports: [
    ProfileAboutComponent,
    CvSectionComponent,
    EducationExperienceListComponent,
    JobExperienceListComponent,
    ProjectsExperienceListComponent,
    LanguagesExperienceListComponent,
    HobbiesListComponent,
    AdditionalSkillsListComponent,
    GroupedSkillsListComponent,
    LangPickerComponent,
    PagePdfExportComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  private dataService: HomePageService = inject(HomePageService);

  public cvData: Signal<CvData> = this.dataService.cvData;
}
