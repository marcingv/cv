import { Component, inject, Signal } from '@angular/core';
import { CvData } from '../../domain/models';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProfileAboutComponent } from '../../features/employee/components/profile-about';
import { CvSectionComponent } from '../../ui/components/cv-section';
import { EducationExperienceListComponent } from '../../features/education/components/education-experience-list';
import { JobExperienceListComponent } from '../../features/jobs/components/job-experience-list';
import { ProjectsExperienceListComponent } from '../../features/projects/components/projects-experience-list';
import { LanguagesExperienceListComponent } from '../../features/languages/components/languages-experience-list';
import { HobbiesListComponent } from '../../features/hobbies/components/hobbies-list';
import { AdditionalSkillsListComponent } from '../../features/skills/components/additional-skills-list';
import { HomePageService } from './home-page.service';
import { GroupedSkillsListComponent } from '../../features/skills/components/grouped-skills-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    ProfileAboutComponent,
    CvSectionComponent,
    EducationExperienceListComponent,
    JobExperienceListComponent,
    ProjectsExperienceListComponent,
    LanguagesExperienceListComponent,
    HobbiesListComponent,
    AdditionalSkillsListComponent,
    GroupedSkillsListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  private dataService: HomePageService = inject(HomePageService);

  // public cvData$: Observable<CvData> = this.dataService.cvData$;
  public cvData: Signal<CvData | undefined> = this.dataService.cvData;

  public constructor() {
    console.error('home cmp init');
  }
}
