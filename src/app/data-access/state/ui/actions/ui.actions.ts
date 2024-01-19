import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UiActions = createActionGroup({
  source: 'Ui',
  events: {
    'Navigation started': emptyProps(),
    'Navigation finished': emptyProps(),
  },
});
