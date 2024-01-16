import { Component } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import { Observable } from 'rxjs';
import { CvData } from '../../domain/models';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProfileAboutComponent } from '../../features/profile-about';
import { CvSectionComponent } from '../../ui/cv-section';
import { EducationExperienceListComponent } from '../../features/education-experience-list';
import { JobExperienceListComponent } from '../../features/job-experience-list';
import { ProjectsExperienceListComponent } from '../../features/projects-experience-list';

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
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  host: { class: 'd-flex gap-3' },
})
export class HomePageComponent {
  public cvData$: Observable<CvData> = this.cvDataApi.fetchData();

  public constructor(private cvDataApi: CvDataApiService) {}
}
