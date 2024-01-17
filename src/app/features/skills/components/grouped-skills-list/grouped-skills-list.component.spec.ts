import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedSkillsListComponent } from './grouped-skills-list.component';

describe('GrouppedSkillsListComponent', () => {
  let component: GroupedSkillsListComponent;
  let fixture: ComponentFixture<GroupedSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedSkillsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupedSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
