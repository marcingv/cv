import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from '../../../core/translations/pipes/localized-date.pipe';
import { TranslationKey } from '../../../core/translations';

@Component({
  selector: 'app-time-span',
  standalone: true,
  imports: [LocalizedDatePipe, TranslateModule],
  templateUrl: './time-span.component.html',
  styleUrl: './time-span.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSpanComponent {
  public readonly TILL_NOW_LABEL: TranslationKey = 'tillNow';

  @Input({ required: true }) from!: Date | string | number;
  @Input() to?: Date | string | number;
}
