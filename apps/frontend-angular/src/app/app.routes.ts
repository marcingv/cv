import { Routes } from '@angular/router';
import { cvDataResolver } from '@gv-cv/angular-data-access-cv';
import { ErrorLayoutComponent } from './layouts/error-layout';
import { OopsErrorPageComponent } from './pages/oops-error-page';
import { CvLayoutComponent } from '@gv-cv/angular-feature-layout-cv';
import { HomePageComponent } from './pages/home-page';

export const routes: Routes = [
  {
    path: 'error',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OopsErrorPageComponent,
        title: 'Wystąpił błąd',
      },
    ],
  },
  {
    path: '',
    component: CvLayoutComponent,
    title: 'Marcin Gawski - Curriculum Vitae',
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
