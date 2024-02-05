import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CvDataEntity } from '@app/data-access/state/cv-data/models';
import { LangCode } from '@app/core/translations';

export const CvDataActions = createActionGroup({
  source: 'CvData',
  events: {
    Load: emptyProps(),
    'Load for language': props<{ language: LangCode }>(),
    'Load Success': props<{ entity: CvDataEntity }>(),
    'Load Failure': props<{ language: LangCode; error: Error }>(),
  },
});
