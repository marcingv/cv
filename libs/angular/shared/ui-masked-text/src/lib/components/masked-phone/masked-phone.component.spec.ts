import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskedPhoneComponent } from './masked-phone.component';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('MaskedPhoneComponent', () => {
  let component: MaskedPhoneComponent;
  let fixture: ComponentFixture<MaskedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskedPhoneComponent, TranslationsTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MaskedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
