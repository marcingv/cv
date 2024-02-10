import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { HomePageService } from './home-page.service';
import { CvData } from '../../domain/models';
import { CvDataFactory } from '../../testing/factories/models';
import { LANG_EN_CODE, LANG_PL_CODE } from '../../core/translations';

describe('HomePageComponent', (): void => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageService: jasmine.SpyObj<HomePageService>;

  beforeEach(async () => {
    homePageService = jasmine.createSpyObj<HomePageService>(
      ['changeLanguage'],
      {
        cvData: signal<CvData>(CvDataFactory.createInstance()),
        availableLangs: signal([LANG_PL_CODE, LANG_EN_CODE]),
        currentLang: signal(LANG_PL_CODE),
      },
    );

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

  it('should trigger language change', (): void => {
    component.changeLang(LANG_EN_CODE);

    expect(homePageService.changeLanguage).toHaveBeenCalledOnceWith(
      LANG_EN_CODE,
    );
  });
});
