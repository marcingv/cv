import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadeByGdeBadgeComponent } from './made-by-gde-badge.component';

describe('MadeByGdeBadgeComponent', () => {
  let component: MadeByGdeBadgeComponent;
  let fixture: ComponentFixture<MadeByGdeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadeByGdeBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MadeByGdeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
