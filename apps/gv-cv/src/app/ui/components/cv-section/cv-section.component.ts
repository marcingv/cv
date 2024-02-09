import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslationKey } from '@app/core/translations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSectionComponent {
  @Input() public title?: TranslationKey;
}
