import { Observable } from 'rxjs';

export declare type ResolveMetaTagValueFn = () =>
  | Observable<string>
  | Promise<string>
  | string;
