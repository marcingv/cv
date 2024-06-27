import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadingCertificationBadgeComponent } from './leading-certification-badge.component';
import { Course } from '@gv-cv/shared-util-types';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LeadingCertificationBadgeComponent', () => {
  let component: LeadingCertificationBadgeComponent;
  let fixture: ComponentFixture<LeadingCertificationBadgeComponent>;

  const certificate: Course = {
    platform: 'angular-training',
    name: 'Sample certification',
    certFileUrl: 'http://localhost/cert.pdf',
    date: new Date().toISOString(),
    visible: true,
    printable: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadingCertificationBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadingCertificationBadgeComponent);
    component = fixture.componentInstance;
    component.certificate = certificate;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cert within downloadable link', () => {
    const a: DebugElement = fixture.debugElement.query(By.css('a'));

    expect(a).toBeTruthy();
    expect(a.attributes['href']).toEqual(certificate.certFileUrl);
    expect(a.attributes['target']).toEqual('_blank');
  });
});
