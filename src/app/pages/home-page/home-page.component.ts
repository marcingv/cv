import { Component } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import { Observable } from 'rxjs';
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
import { ContactDetailsComponent } from '../../features/employee/components/contact-details';

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
    ContactDetailsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  host: { class: 'd-flex' },
})
export class HomePageComponent {
  public cvData$: Observable<CvData> = this.cvDataApi.fetchData();

  public constructor(private cvDataApi: CvDataApiService) {}
}
