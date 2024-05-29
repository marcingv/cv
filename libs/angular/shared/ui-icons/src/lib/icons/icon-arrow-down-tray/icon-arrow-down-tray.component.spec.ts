import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconArrowDownTrayComponent } from './icon-arrow-down-tray.component';

describe('IconArrowDownTrayComponent', () => {
  let component: IconArrowDownTrayComponent;
  let fixture: ComponentFixture<IconArrowDownTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconArrowDownTrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconArrowDownTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
