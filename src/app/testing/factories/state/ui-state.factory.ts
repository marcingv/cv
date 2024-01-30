import { fromUi } from '@app/data-access/state/ui/reducers';
import { LANG_EN_CODE, LANG_PL_CODE } from '@app/data-access/state/ui/models';

export class UiStateFactory {
  public static createInstance(params?: Partial<fromUi.State>): fromUi.State {
    const state: fromUi.State = {
      lang: LANG_PL_CODE,
      languages: [LANG_PL_CODE, LANG_EN_CODE],
      isNavigating: false,
      errorPageMessage: undefined,
    };

    return {
      ...state,
      ...(params ?? {}),
    };
  }
}
