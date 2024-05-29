import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListItemComponent } from './course-list-item.component';
import { Course } from '@gv-cv/shared-util-types';

describe('CourseListItemComponent', (): void => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  const course: Course = {
    platform: 'udemy',
    name: 'Docker & Kubernetes: The Practical Guide',
    date: '2024-01-09',
    certFileUrl: 'https://localhost/cert.pdf',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
