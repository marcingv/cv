import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SsrEnvReaderService {
  private readonly isServerPlatform = isPlatformServer(inject(PLATFORM_ID));

  private envs: { [key: string]: string | undefined } = this.isServerPlatform
    ? process.env
    : {};

  public getVariables(): { [key: string]: string | undefined } {
    return this.envs;
  }

  public getVariable(name: string): string | undefined {
    return this.envs[name];
  }
}
