import { Route } from '@angular/router';
import { ErrorLayoutComponent } from '@gv-cv/angular-feature-layout-error';
import { OopsErrorPageComponent } from './oops-error-page';
import { pickTranslationKey } from '@gv-cv/angular-util-translations';

export const routes: Route[] = [
  {
    path: '',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OopsErrorPageComponent,
        title: pickTranslationKey('pageTitles.error'),
      },
    ],
  },
];
