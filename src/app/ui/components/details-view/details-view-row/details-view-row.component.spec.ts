import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewRowComponent } from './details-view-row.component';

describe('DetailsViewRowComponent', () => {
  let component: DetailsViewRowComponent;
  let fixture: ComponentFixture<DetailsViewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsViewRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
