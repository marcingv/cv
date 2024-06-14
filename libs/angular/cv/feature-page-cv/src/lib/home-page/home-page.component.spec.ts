import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { HomePageService } from './home-page.service';
import { Course, CvData, CvDataFactory } from '@gv-cv/shared-util-types';
import { OrderedProjectsExperiencePipe } from '@gv-cv/angular-ui-cv-projects';

describe('HomePageComponent', (): void => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageService: Partial<HomePageService>;

  const cvData: CvData = CvDataFactory.createInstance();
  const leadingCert: Course = cvData.courses[0];

  beforeEach(async () => {
    homePageService = {
      cvData: signal<CvData>(cvData),
      leadingCertificate: signal<Course>(leadingCert),
    };

    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    })
      .overrideComponent(HomePageComponent, {
        set: {
          imports: [OrderedProjectsExperiencePipe],
          providers: [{ provide: HomePageService, useValue: homePageService }],
          schemas: [NO_ERRORS_SCHEMA],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
