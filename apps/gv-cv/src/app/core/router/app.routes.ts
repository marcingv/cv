import { Routes } from '@angular/router';
import { CvLayoutComponent } from '@app/layouts/cv-layout';
import { HomePageComponent } from '@app/pages/home-page';
import { OopsErrorPageComponent } from '@app/pages/oops-error-page';
import { ErrorLayoutComponent } from '@app/layouts/error-layout';
import { cvDataResolver } from '@app/data-access/resolvers/cv-data.resolver';

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
