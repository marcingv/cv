import { MaskedPhonePipe } from './masked-phone.pipe';

describe('MaskedPhonePipe', () => {
  let pipe: MaskedPhonePipe;

  beforeEach(() => {
    pipe = new MaskedPhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mask phone number', () => {
    expect(pipe.transform('123 456 789')).toEqual('123 *** 789');
  });

  it('should return empty string for null and undefined', () => {
    expect(pipe.transform(null)).toEqual('');
    expect(pipe.transform(undefined)).toEqual('');
  });
});
