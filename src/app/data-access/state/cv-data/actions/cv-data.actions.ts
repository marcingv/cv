import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CvData } from '@app/domain/models';

export const CvDataActions = createActionGroup({
  source: 'CvData',
  events: {
    Load: emptyProps(),
    'Load Success': props<{ data: CvData }>(),
    'Load Failure': props<{ error: Error }>(),
  },
});
