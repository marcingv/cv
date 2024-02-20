import { Routes } from '@angular/router';
import { ErrorLayoutComponent } from '@gv-cv/angular-feature-layout-error';
import { OopsErrorPageComponent } from './pages/oops-error-page';
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
    loadChildren: () =>
      import('@gv-cv/angular-feature-page-cv').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
