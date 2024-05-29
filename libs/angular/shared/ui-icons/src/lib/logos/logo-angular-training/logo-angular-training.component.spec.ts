import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoAngularTrainingComponent } from './logo-angular-training.component';

describe('LogoAngularTrainingComponent', () => {
  let component: LogoAngularTrainingComponent;
  let fixture: ComponentFixture<LogoAngularTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAngularTrainingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoAngularTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
