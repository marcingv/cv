import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealMaskButtonComponent } from './reveal-mask-button.component';

describe('RevealMaskButtonComponent', () => {
  let component: RevealMaskButtonComponent;
  let fixture: ComponentFixture<RevealMaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealMaskButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RevealMaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
