import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtCertLevel2BadgeComponent } from './at-cert-level-2-badge.component';

describe('AtCertificationLevel2BadgeComponent', () => {
  let component: AtCertLevel2BadgeComponent;
  let fixture: ComponentFixture<AtCertLevel2BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtCertLevel2BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtCertLevel2BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
