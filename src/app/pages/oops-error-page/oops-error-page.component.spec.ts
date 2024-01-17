import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsErrorPageComponent } from './oops-error-page.component';

describe('OopsErrorPageComponent', () => {
  let component: OopsErrorPageComponent;
  let fixture: ComponentFixture<OopsErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopsErrorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OopsErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
