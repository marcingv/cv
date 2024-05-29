import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtCertLevel3BadgeComponent } from './at-cert-level-3-badge.component';

describe('AtCertLevel3BadgeComponent', () => {
  let component: AtCertLevel3BadgeComponent;
  let fixture: ComponentFixture<AtCertLevel3BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtCertLevel3BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtCertLevel3BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
