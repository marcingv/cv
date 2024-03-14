import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskedEmailComponent } from './masked-email.component';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('MaskedEmailComponent', () => {
  let component: MaskedEmailComponent;
  let fixture: ComponentFixture<MaskedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskedEmailComponent, TranslationsTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MaskedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
