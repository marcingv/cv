import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { FakeTranslationsLoader } from './fake-translations-loader';
import { DEFAULT_LANG } from '@gv-cv/shared-util-types';
import localePl from '@angular/common/locales/pl';

const config: TranslateModuleConfig = {
  defaultLanguage: DEFAULT_LANG,
};

registerLocaleData(localePl);

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule.forRoot(config)],
  providers: [
    {
      provide: TranslateLoader,
      useClass: FakeTranslationsLoader,
    },
    DatePipe,
  ],
})
export class TranslationsTestingModule {}
