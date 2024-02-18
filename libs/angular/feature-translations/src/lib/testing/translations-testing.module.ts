import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader } from '@ngx-translate/core';
import { FakeTranslationsLoader } from './fake-translations-loader';
import { provideNgxTranslations } from '../configuration';

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