import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BouncingButtonComponent } from './bouncing-button.component';

describe('BouncingButtonComponent', () => {
  let component: BouncingButtonComponent;
  let fixture: ComponentFixture<BouncingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouncingButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BouncingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
