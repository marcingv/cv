import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsViewComponent {}
