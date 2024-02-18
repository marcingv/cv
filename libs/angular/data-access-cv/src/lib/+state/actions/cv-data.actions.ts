import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CvDataEntity } from '../models';
import { LangCode } from '@gv-cv/shared-util-types';

export const CvDataActions = createActionGroup({
  source: 'CvData',
  events: {
    Load: emptyProps(),
    'Load for language': props<{ language: LangCode }>(),
    'Load Success': props<{ entity: CvDataEntity }>(),
    'Load Failure': props<{ language: LangCode; error: Error }>(),
  },
});
