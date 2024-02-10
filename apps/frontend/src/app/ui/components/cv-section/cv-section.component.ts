import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationKey } from '../../../core/translations';

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
