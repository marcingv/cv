import { fromUi } from '@app/data-access/state/ui/reducers';
import { LangCode } from '@app/data-access/state/ui/models';

export class UiStateFactory {
  public static createInstance(params?: Partial<fromUi.State>): fromUi.State {
    const state: fromUi.State = {
      lang: LangCode.PL,
      languages: [LangCode.PL, LangCode.EN],
      isNavigating: false,
      errorPageMessage: undefined,
    };

    return {
      ...state,
      ...(params ?? {}),
    };
  }
}
