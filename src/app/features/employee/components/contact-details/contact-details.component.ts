import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactData } from '@app/domain/models';
import {
  DetailsViewComponent,
  DetailsViewRowComponent,
  DetailsViewRowLabelDirective,
  DetailsViewRowValueDirective,
} from '@app/ui/components/details-view';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    DetailsViewComponent,
    DetailsViewRowComponent,
    DetailsViewRowLabelDirective,
    DetailsViewRowValueDirective,
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsComponent {
  @Input({ required: true }) public data!: ContactData;
}
