import { SkillCategoryLabelPipe } from './skill-category-label.pipe';

describe('SkillCategoryLabelPipe', () => {
  let pipe: SkillCategoryLabelPipe;

  beforeEach(() => {
    pipe = new SkillCategoryLabelPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should provide label for each skill category', () => {
    expect(pipe.transform('frontend')).toBeTruthy();
    expect(pipe.transform('backend')).toBeTruthy();
    expect(pipe.transform('databases')).toBeTruthy();
    expect(pipe.transform('methodology')).toBeTruthy();
    expect(pipe.transform('no-category')).toBeTruthy();
  });
});
