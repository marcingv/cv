import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { Observable } from 'rxjs';

export abstract class CvDataApi {
  public abstract fetchData(lang: LangCode): Observable<CvData>;
}
