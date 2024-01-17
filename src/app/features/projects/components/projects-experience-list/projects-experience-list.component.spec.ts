import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExperienceListComponent } from './projects-experience-list.component';

describe('ProjectsExperienceListComponent', () => {
  let component: ProjectsExperienceListComponent;
  let fixture: ComponentFixture<ProjectsExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsExperienceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
