import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LangCode } from '@app/core/translations';

export const UiActions = createActionGroup({
  source: 'Ui',
  events: {
    'Navigation started': emptyProps(),
    'Navigation finished': emptyProps(),
    'Set initial lang': props<{ language: LangCode }>(),
    'Change lang': props<{ language: LangCode }>(),
    'Set lang success': props<{ language: LangCode }>(),
    'Set lang failure': props<{ language: LangCode }>(),
    'Go to error page': props<{ errorMessage: string | undefined }>(),
    'Clear error page message': emptyProps(),
  },
});
