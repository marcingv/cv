import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslationKey } from '@app/core/translations';

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSectionComponent {
  @Input() public title?: TranslationKey | string;
}
