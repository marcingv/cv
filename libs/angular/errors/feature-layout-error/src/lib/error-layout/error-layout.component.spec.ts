import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorLayoutComponent } from './error-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ErrorLayoutComponent', () => {
  let component: ErrorLayoutComponent;
  let fixture: ComponentFixture<ErrorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(ErrorLayoutComponent, {
      set: {
        imports: [],
        schemas: [NO_ERRORS_SCHEMA],
      },
    })
      .configureTestingModule({
        imports: [ErrorLayoutComponent],
      })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
