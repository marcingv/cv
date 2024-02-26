import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Component({
  selector: 'gv-cv-cv-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSectionComponent {
  @Input() public title?: TranslationKey;
  @Input() public cssClass? = 'py-8';
}
