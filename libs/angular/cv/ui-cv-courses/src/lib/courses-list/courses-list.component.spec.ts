import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { Course } from '@gv-cv/shared-util-types';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';

describe('AngularUiCvCoursesComponent', (): void => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  const courses: Course[] = [
    {
      platform: 'udemy',
      name: 'Docker & Kubernetes: The Practical Guide',
      date: '2024-01-09',
      certFileUrl: 'https://localhost/cert.pdf',
      visible: true,
      printable: true,
    },
    {
      platform: 'udemy',
      name: 'GitHub Actions - The Complete Guide',
      date: '2024-03-05',
      certFileUrl: 'https://localhost/cert.pdf',
      visible: true,
      printable: true,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.data = courses;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should render the list of courses', (): void => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(CourseListItemComponent),
    );

    expect(courseItems).toBeTruthy();
    expect(courseItems.length).toEqual(courses.length);
  });
});
