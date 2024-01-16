import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationExperienceListComponent } from './education-experience-list.component';

describe('EducationExperienceListComponent', () => {
  let component: EducationExperienceListComponent;
  let fixture: ComponentFixture<EducationExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationExperienceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
