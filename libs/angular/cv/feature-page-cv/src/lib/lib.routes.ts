import { CvLayoutComponent } from '@gv-cv/angular-feature-layout-cv';
import { pickTranslationKey } from '@gv-cv/angular-util-translations';
import { HomePageComponent } from './home-page';
import { cvDataResolver } from '@gv-cv/angular-data-access-cv';
import { Route } from '@angular/router';
import { RouterDataMetaTags } from '@gv-cv/angular-feature-seo-meta-tags';
import { metaDescriptionContentProvider } from './seo-tags';

export const routes: Route[] = [
  {
    path: '',
    component: CvLayoutComponent,
    title: pickTranslationKey('pageTitles.cv'),
    data: {
      [RouterDataMetaTags.META_DESCRIPTION]: metaDescriptionContentProvider,
    },
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
];
