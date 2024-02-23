import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaskedPhoneComponent } from './masked-phone.component';

describe('MaskedPhoneComponent', () => {
  let component: MaskedPhoneComponent;
  let fixture: ComponentFixture<MaskedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskedPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaskedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
