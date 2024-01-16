import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-time-span',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './time-span.component.html',
  styleUrl: './time-span.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSpanComponent {
  @Input({ required: true }) from!: Date | string | number;
  @Input() to?: Date | string | number;
}
