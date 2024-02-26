import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLayoutComponent } from './cv-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CvLayoutComponent', () => {
  let component: CvLayoutComponent;
  let fixture: ComponentFixture<CvLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLayoutComponent],
    })
      .overrideComponent(CvLayoutComponent, {
        set: {
          imports: [],
          schemas: [NO_ERRORS_SCHEMA],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
