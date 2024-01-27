import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeData } from '@app/domain/models';
import { CvSectionComponent } from '@app/ui/components/cv-section';
import { ContactDetailsComponent } from '../contact-details';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationKey } from '@app/core/translations';

@Component({
  selector: 'app-profile-about',
  standalone: true,
  imports: [
    CvSectionComponent,
    ContactDetailsComponent,
    NgOptimizedImage,
    TranslateModule,
  ],
  templateUrl: './profile-about.component.html',
  styleUrl: './profile-about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAboutComponent {
  public readonly ABOUT_ME: TranslationKey = 'aboutMe';

  @Input({ required: true }) public profile!: EmployeeData;
}
