import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { HomePageService } from './home-page.service';
import { CvData, CvDataFactory } from '@gv-cv/shared-util-types';

describe('HomePageComponent', (): void => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageService: Partial<HomePageService>;

  beforeEach(async () => {
    homePageService = {
      cvData: signal<CvData>(CvDataFactory.createInstance()),
    };

    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    })
      .overrideComponent(HomePageComponent, {
        set: {
          imports: [],
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
