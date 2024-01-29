import { Component, inject, Signal } from '@angular/core';
import { CvData } from '@app/domain/models';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProfileAboutComponent } from '@app/features/employee/components/profile-about';
import { CvSectionComponent } from '@app/ui/components/cv-section';
import { EducationExperienceListComponent } from '@app/features/education/components/education-experience-list';
import { JobExperienceListComponent } from '@app/features/jobs/components/job-experience-list';
import { ProjectsExperienceListComponent } from '@app/features/projects/components/projects-experience-list';
import { LanguagesExperienceListComponent } from '@app/features/languages/components/languages-experience-list';
import { HobbiesListComponent } from '@app/features/hobbies/components/hobbies-list';
import { AdditionalSkillsListComponent } from '@app/features/skills/components/additional-skills-list';
import { HomePageService } from './home-page.service';
import { GroupedSkillsListComponent } from '@app/features/skills/components/grouped-skills-list';
import { LangPickerComponent } from '@app/ui/components/lang-picker';
import { LangCode } from '@app/data-access/state/ui/models';

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
    LangPickerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  private dataService: HomePageService = inject(HomePageService);

  public cvData: Signal<CvData> = this.dataService.cvData;
  public currentLang: Signal<LangCode> = this.dataService.currentLang;
  public availableLangs: Signal<LangCode[]> = this.dataService.availableLangs;

  public changeLang(lang: LangCode): void {
    this.dataService.changeLanguage(lang);
  }
}
