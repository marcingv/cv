import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceListComponent } from './job-experience-list.component';

describe('JobExperienceListComponent', () => {
  let component: JobExperienceListComponent;
  let fixture: ComponentFixture<JobExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobExperienceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
