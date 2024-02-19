import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { LangCode } from '@gv-cv/shared-util-types';
import { UiLangService } from '@gv-cv/angular-data-access-ui';

@Component({
  selector: 'gv-cv-lang-picker',
  standalone: true,
  imports: [NgClass],
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

  public currentLang: Signal<LangCode> = this.uiLangService.currentLang;
  public availableLangs: Signal<LangCode[]> = this.uiLangService.availableLangs;

  public changeLang(lang: LangCode): void {
    this.uiLangService.changeLanguage(lang);
  }
}
