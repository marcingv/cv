import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader } from '@ngx-translate/core';
import { provideNgxTranslations } from '../../core/translations';
import { FakeTranslationsLoader } from './fake-translations-loader';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideNgxTranslations(),
    {
      provide: TranslateLoader,
      useClass: FakeTranslationsLoader,
    },
  ],
})
export class TranslationsTestingModule {}
