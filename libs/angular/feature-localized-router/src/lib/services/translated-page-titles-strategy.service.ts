import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Injectable({ providedIn: 'root' })
export class TranslatedPageTitlesStrategyService extends TitleStrategy {
  private readonly DEFAULT_TITLE: TranslationKey = 'pageTitles.default';

  private readonly title = inject(Title);
  private readonly translateService = inject(TranslateService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this.title.setTitle(
      this.translateService.instant(title ?? this.DEFAULT_TITLE),
    );
  }
}
