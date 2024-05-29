import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtCertLevel1BadgeComponent } from './at-cert-level-1-badge.component';

describe('AtCertLevel1BadgeComponent', () => {
  let component: AtCertLevel1BadgeComponent;
  let fixture: ComponentFixture<AtCertLevel1BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtCertLevel1BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtCertLevel1BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
