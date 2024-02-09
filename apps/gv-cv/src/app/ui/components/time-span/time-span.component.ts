import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocalizedDatePipe } from '@app/core/translations/pipes/localized-date.pipe';
import { TranslationKey } from '@app/core/translations';
import { TranslateModule } from '@ngx-translate/core';

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
