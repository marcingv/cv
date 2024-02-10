import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LangCode } from '../../../../core/translations';
import { CvDataEntity } from '../models';

export const CvDataActions = createActionGroup({
  source: 'CvData',
  events: {
    Load: emptyProps(),
    'Load for language': props<{ language: LangCode }>(),
    'Load Success': props<{ entity: CvDataEntity }>(),
    'Load Failure': props<{ language: LangCode; error: Error }>(),
  },
});
