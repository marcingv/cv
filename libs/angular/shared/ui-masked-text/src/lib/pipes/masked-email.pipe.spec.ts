import { MaskedEmailPipe } from './masked-email.pipe';

describe('MaskedEmailPipe', () => {
  let pipe: MaskedEmailPipe;

  beforeEach(() => {
    pipe = new MaskedEmailPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mask email', () => {
    expect(pipe.transform('john.doe.example@gmail.com')).toEqual(
      'john.doe********@*****.com',
    );
  });
});
