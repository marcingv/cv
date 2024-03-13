import { Routes } from '@angular/router';
import {
  defaultMetaDescriptionContentProvider,
  RouterDataMetaTags,
} from '@gv-cv/angular-feature-seo-meta-tags';

export const routes: Routes = [
  {
    path: '',
    data: {
      [RouterDataMetaTags.META_DESCRIPTION]:
        defaultMetaDescriptionContentProvider,
    },
    children: [
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
    ],
  },
];
