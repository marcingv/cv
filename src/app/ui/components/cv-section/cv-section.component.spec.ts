import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSectionComponent } from './cv-section.component';

describe('CvSectionComponent', () => {
  let component: CvSectionComponent;
  let fixture: ComponentFixture<CvSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
