import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { LocalizedDatePipe } from '@gv-cv/angular-ui-translations';

@Component({
  selector: 'gv-cv-time-span',
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
