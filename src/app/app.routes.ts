import { Routes } from '@angular/router';
import { CvLayoutComponent } from './layouts/cv-layout';
import { HomePageComponent } from './pages/home-page';

export const routes: Routes = [
  {
    path: '',
    component: CvLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
      },
    ],
  },
];
