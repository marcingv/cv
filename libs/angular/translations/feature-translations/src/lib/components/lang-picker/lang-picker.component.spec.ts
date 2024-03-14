import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangPickerComponent } from './lang-picker.component';
import { UiLangService } from '@gv-cv/angular-data-access-ui';
import { signal } from '@angular/core';
import { EN_LANG_CODE, LangCode, PL_LANG_CODE } from '@gv-cv/shared-util-types';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('LangPickerComponent', () => {
  let component: LangPickerComponent;
  let fixture: ComponentFixture<LangPickerComponent>;
  let uiLangService: UiLangService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangPickerComponent, TranslationsTestingModule],
      providers: [
        {
          provide: UiLangService,
          useValue: {
            availableLangs: signal<LangCode[]>([PL_LANG_CODE, EN_LANG_CODE]),
            currentLang: signal<LangCode>(PL_LANG_CODE),
            changeLanguage: jest.fn(),
          } as Partial<UiLangService>,
        },
      ],
    }).compileComponents();

    uiLangService = TestBed.inject(UiLangService);

    fixture = TestBed.createComponent(LangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change lang in UI', () => {
    const changeLangSpy = jest.spyOn(uiLangService, 'changeLanguage');

    component.changeLang('fr');

    expect(changeLangSpy).toHaveBeenCalledWith('fr');
  });
});
