import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { LangCode } from '@gv-cv/shared-util-types';
import { UiLangService } from '@gv-cv/angular-data-access-ui';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-lang-picker',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './lang-picker.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerComponent {
  private readonly uiLangService = inject(UiLangService);

  public readonly CHANGE_LANG_LABEL: TranslationKey =
    'buttonLabels.changeLangTo';

  public currentLang: Signal<LangCode> = this.uiLangService.currentLang;
  public availableLangs: Signal<LangCode[]> = this.uiLangService.availableLangs;

  public changeLang(lang: LangCode): void {
    this.uiLangService.changeLanguage(lang);
  }
}
