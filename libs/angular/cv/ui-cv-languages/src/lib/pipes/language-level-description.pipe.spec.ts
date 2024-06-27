import { LanguageLevelDescriptionPipe } from './language-level-description.pipe';

describe('LanguageLevelDescriptionPipe', (): void => {
  let pipe: LanguageLevelDescriptionPipe;

  beforeEach(() => {
    pipe = new LanguageLevelDescriptionPipe();
  });

  it('create an instance', (): void => {
    expect(pipe).toBeTruthy();
  });

  it('should provide translation keys for all levels', (): void => {
    expect(pipe.transform('native')).toBeTruthy();
    expect(pipe.transform('A1')).toBeTruthy();
    expect(pipe.transform('A2')).toBeTruthy();
    expect(pipe.transform('B1')).toBeTruthy();
    expect(pipe.transform('B2')).toBeTruthy();
    expect(pipe.transform('C1')).toBeTruthy();
    expect(pipe.transform('C2')).toBeTruthy();
  });
});
