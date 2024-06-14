import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { fromCvData } from '../reducers';
import { CvDataEntity } from '../models';
import { Course, CvData, LangCode } from '@gv-cv/shared-util-types';
import { fromUi } from '@gv-cv/angular-data-access-ui';

export const selectCvDataForCurrentLanguage = createSelector(
  fromUi.uiFeature.selectLang,
  fromCvData.cvDataFeature.selectEntities,
  (lang: LangCode, entities: Dictionary<CvDataEntity>): CvData | undefined =>
    entities[lang]?.data,
);

export const selectRODOConsentForCurrentLanguage = createSelector(
  selectCvDataForCurrentLanguage,
  (data: CvData | undefined) => data?.consents.RODO,
);

export const selectLeadingCertificate = createSelector(
  selectCvDataForCurrentLanguage,
  (data: CvData | undefined): Course | undefined => {
    const courses: Course[] = data?.courses ?? [];

    if (!courses.length) {
      return undefined;
    }

    const angularExpertDeveloperCert: Course | undefined = courses.find(
      (oneCourse: Course): boolean =>
        oneCourse.type === 'angular-expert-developer',
    );
    if (angularExpertDeveloperCert) {
      return angularExpertDeveloperCert;
    }

    const angularDeveloperCert: Course | undefined = courses.find(
      (oneCourse: Course): boolean => oneCourse.type === 'angular-developer',
    );
    if (angularDeveloperCert) {
      return angularDeveloperCert;
    }

    return undefined;
  },
);
