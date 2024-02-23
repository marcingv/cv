import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  DetailsViewComponent,
  DetailsViewRowComponent,
  DetailsViewRowLabelDirective,
  DetailsViewRowValueDirective,
} from '@gv-cv/angular-ui-details-view';
import { ContactData } from '@gv-cv/shared-util-types';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { TranslateModule } from '@ngx-translate/core';
import { MaskedPhoneComponent } from '@gv-cv/angular-ui-masked-text';

@Component({
  selector: 'gv-cv-contact-details',
  standalone: true,
  imports: [
    DetailsViewComponent,
    DetailsViewRowComponent,
    DetailsViewRowLabelDirective,
    DetailsViewRowValueDirective,
    TranslateModule,
    MaskedPhoneComponent,
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsComponent {
  public readonly PLACE_OF_RESIDENCE_LABEL: TranslationKey =
    'contactLabels.placeOfResidence';
  public readonly PHONE_NUMBER_LABEL: TranslationKey =
    'contactLabels.phoneNumber';
  public readonly EMAIL_LABEL: TranslationKey = 'contactLabels.email';

  @Input({ required: true }) public data!: ContactData;
}
