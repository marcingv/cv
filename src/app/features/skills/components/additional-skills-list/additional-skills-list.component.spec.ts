import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSkillsListComponent } from './additional-skills-list.component';

describe('AdditionalSkillsListComponent', () => {
  let component: AdditionalSkillsListComponent;
  let fixture: ComponentFixture<AdditionalSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalSkillsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionalSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
