import { TestBed } from '@angular/core/testing';
import { SsrEnvReaderService } from './ssr-env-reader.service';
import { PLATFORM_ID } from '@angular/core';

describe('SsrEnvReaderService', () => {
  describe('When used in SSR mode', () => {
    let service: SsrEnvReaderService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
      });
      service = TestBed.inject(SsrEnvReaderService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have NON empty variables', () => {
      expect(service.getVariables()).toBeTruthy();
      expect(service.getVariables()).not.toEqual({});
      expect(Object.keys(service.getVariables()).length).toBeGreaterThan(0);
      expect(service.getVariable('NODE_ENV')).toBeTruthy();
    });
  });

  describe('When used in Browser mode', () => {
    let service: SsrEnvReaderService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
      });
      service = TestBed.inject(SsrEnvReaderService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have empty variables', () => {
      expect(service.getVariables()).toEqual({});
      expect(service.getVariable('SAMPLE_VAR')).toBeUndefined();
    });
  });
});
