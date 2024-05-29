import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoOracleComponent } from './logo-oracle.component';

describe('LogoOracleComponent', () => {
  let component: LogoOracleComponent;
  let fixture: ComponentFixture<LogoOracleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoOracleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoOracleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
