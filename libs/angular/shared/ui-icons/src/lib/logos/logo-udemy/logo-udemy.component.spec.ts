import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoUdemyComponent } from './logo-udemy.component';

describe('LogoUdemyComponent', () => {
  let component: LogoUdemyComponent;
  let fixture: ComponentFixture<LogoUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoUdemyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
