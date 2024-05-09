import { OrderedProjectsExperiencePipe } from './ordered-projects-experience.pipe';

describe('OrderedProjectsExperiencePipe', () => {
  let pipe: OrderedProjectsExperiencePipe;

  beforeEach(() => {
    pipe = new OrderedProjectsExperiencePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
