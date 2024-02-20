import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'error',
    loadChildren: () =>
      import('@gv-cv/angular-feature-page-error').then((m) => m.routes),
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
