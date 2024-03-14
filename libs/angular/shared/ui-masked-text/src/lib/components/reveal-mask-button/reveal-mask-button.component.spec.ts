import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealMaskButtonComponent } from './reveal-mask-button.component';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('RevealMaskButtonComponent', () => {
  let component: RevealMaskButtonComponent;
  let fixture: ComponentFixture<RevealMaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealMaskButtonComponent, TranslationsTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RevealMaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
