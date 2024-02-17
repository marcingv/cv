import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hobby } from '@gv-cv/shared-util-types';

@Component({
  selector: 'app-hobbies-list',
  standalone: true,
  imports: [],
  templateUrl: './hobbies-list.component.html',
  styleUrl: './hobbies-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesListComponent {
  @Input({ required: true }) public data: Hobby[] = [];
}
