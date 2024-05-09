import { Component, inject, Signal } from '@angular/core';
import { HomePageService } from './home-page.service';
import { ProfileAboutComponent } from '@gv-cv/angular-ui-cv-employee';
import { CvSectionComponent } from '@gv-cv/angular-ui-cv-section';
import { EducationExperienceListComponent } from '@gv-cv/angular-ui-cv-education';
import { JobExperienceListComponent } from '@gv-cv/angular-ui-cv-jobs';
import {
  OrderedProjectsExperiencePipe,
  ProjectsExperienceListComponent,
} from '@gv-cv/angular-ui-cv-projects';
import { LanguagesExperienceListComponent } from '@gv-cv/angular-ui-cv-languages';
import { HobbiesListComponent } from '@gv-cv/angular-ui-cv-hobbies';
import { CvData } from '@gv-cv/shared-util-types';
import { PagePdfExportComponent } from '@gv-cv/angular-feature-pdf-export';
import {
  AdditionalSkillsListComponent,
  GroupedSkillsListComponent,
} from '@gv-cv/angular-ui-cv-skills';

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
    PagePdfExportComponent,
    OrderedProjectsExperiencePipe,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  private dataService: HomePageService = inject(HomePageService);

  public cvData: Signal<CvData> = this.dataService.cvData;
}
