import { Routes } from '@angular/router';
import { CvLayoutComponent } from './layouts/cv-layout';
import { HomePageComponent } from './pages/home-page';
import { OopsErrorPageComponent } from './pages/oops-error-page';
import { ErrorLayoutComponent } from './layouts/error-layout';
import { cvDataResolver } from './data-access/resolvers/cv-data.resolver';

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
