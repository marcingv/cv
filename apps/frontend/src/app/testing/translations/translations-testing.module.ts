import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideNgxTranslations } from '@app/core/translations';
import { TranslateLoader } from '@ngx-translate/core';
import { FakeTranslationsLoader } from '@app/testing/translations/fake-translations-loader';

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
