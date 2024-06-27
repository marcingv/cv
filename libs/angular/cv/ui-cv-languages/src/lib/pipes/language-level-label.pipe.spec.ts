import { LanguageLevelLabelPipe } from './language-level-label.pipe';

describe('LanguageLevelLabelPipe', (): void => {
  let pipe: LanguageLevelLabelPipe;

  beforeEach((): void => {
    pipe = new LanguageLevelLabelPipe();
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
