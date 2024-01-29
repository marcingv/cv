import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { HomePageService } from '@app/pages/home-page/home-page.service';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import { LangCode } from '@app/data-access/state/ui/models';

describe('HomePageComponent', (): void => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageService: jasmine.SpyObj<HomePageService>;

  beforeEach(async () => {
    homePageService = jasmine.createSpyObj<HomePageService>(
      ['changeLanguage'],
      {
        cvData: signal<CvData>(CvDataFactory.createInstance()),
        availableLangs: signal([LangCode.PL, LangCode.EN]),
        currentLang: signal(LangCode.PL),
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
    component.changeLang(LangCode.EN);

    expect(homePageService.changeLanguage).toHaveBeenCalledOnceWith(
      LangCode.EN,
    );
  });
});
