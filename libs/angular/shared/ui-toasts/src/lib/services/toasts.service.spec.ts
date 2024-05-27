import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ToastsService } from './toasts.service';
import { ToastMessage } from '../models/toast-message';

describe('ToastsService', (): void => {
  let service: ToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(ToastsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should initially have empty messages', (): void => {
    expect(service.messages().length).toEqual(0);
  });

  it('should add toast message and remove it after delay', fakeAsync((): void => {
    expect(service.messages().length).toEqual(0);

    const message: ToastMessage = {
      message: 'Test message',
      severity: 'primary',
      timeoutMs: 500,
    };

    service.show(message);
    expect(service.messages().length).toEqual(1);
    expect(service.messages()).toContain(message);

    tick(500);

    expect(service.messages()).not.toContain(message);
    expect(service.messages().length).toEqual(0);
  }));
});
