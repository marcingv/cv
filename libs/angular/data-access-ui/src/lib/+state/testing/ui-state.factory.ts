import { EN_LANG_CODE, PL_LANG_CODE } from '@gv-cv/shared-util-types';
import { fromUi } from '../reducers';

export class UiStateFactory {
  public static createInstance(params?: Partial<fromUi.State>): fromUi.State {
    const state: fromUi.State = {
      lang: PL_LANG_CODE,
      languages: [PL_LANG_CODE, EN_LANG_CODE],
      isNavigating: false,
      errorPageMessage: undefined,
    };

    return {
      ...state,
      ...(params ?? {}),
    };
  }
}
