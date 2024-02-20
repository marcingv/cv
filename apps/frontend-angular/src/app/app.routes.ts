import { Routes } from '@angular/router';
import { cvDataResolver } from '@gv-cv/angular-data-access-cv';
import { ErrorLayoutComponent } from '@gv-cv/angular-feature-layout-error';
import { OopsErrorPageComponent } from './pages/oops-error-page';
import { CvLayoutComponent } from '@gv-cv/angular-feature-layout-cv';
import { HomePageComponent } from './pages/home-page';
import { pickTranslationKey } from '@gv-cv/angular-util-translations';

export const routes: Routes = [
  {
    path: 'error',
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
  {
    path: '',
    component: CvLayoutComponent,
    title: pickTranslationKey('pageTitles.cv'),
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
        resolve: {
          cvData: cvDataResolver,
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
