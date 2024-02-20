import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsChipsListComponent } from './skills-chips-list.component';

describe('SkillsChipsListComponent', () => {
  let component: SkillsChipsListComponent;
  let fixture: ComponentFixture<SkillsChipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsChipsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
