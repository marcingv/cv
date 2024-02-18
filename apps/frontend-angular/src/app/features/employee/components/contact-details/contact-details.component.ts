import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  DetailsViewComponent,
  DetailsViewRowComponent,
  DetailsViewRowLabelDirective,
  DetailsViewRowValueDirective,
} from '../../../../ui/components/details-view';
import { ContactData } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-contact-details',
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
