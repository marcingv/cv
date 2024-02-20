import { UiEffects, UiLangEffects } from './effects';

export * from './actions/ui.actions';
export * from './effects';
export * from './reducers';
export * from './selectors';
export * from './testing';

export const UI_EFFECTS = [UiEffects, UiLangEffects];
