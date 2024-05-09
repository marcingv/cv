import { CategorySkillChipsBgClassPipe } from './category-skill-chips-bg-class.pipe';

describe('CategorySkillChipsBgClassPipe', () => {
  let pipe: CategorySkillChipsBgClassPipe;

  beforeEach(() => {
    pipe = new CategorySkillChipsBgClassPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should provide background css class for each skill category', () => {
    expect(pipe.transform('frontend')).toBeTruthy();
    expect(pipe.transform('backend')).toBeTruthy();
    expect(pipe.transform('databases')).toBeTruthy();
    expect(pipe.transform('methodology')).toBeTruthy();
    expect(pipe.transform('no-category')).toBeTruthy();
  });
});
