import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LangCode } from '../models';

export const UiActions = createActionGroup({
  source: 'Ui',
  events: {
    'Navigation started': emptyProps(),
    'Navigation finished': emptyProps(),
    'Change lang': props<{ language: LangCode }>(),
    'Go to error page': props<{ errorMessage: string | undefined }>(),
    'Clear error page message': emptyProps(),
  },
});
