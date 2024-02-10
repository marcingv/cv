import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutComponent } from './profile-about.component';
import { EmployeeData } from '../../../../domain/models';
import { CvDataFactory } from '../../../../testing/factories/models';
import { TranslationsTestingModule } from '../../../../testing/translations';

describe('ProfileAboutComponent', () => {
  let component: ProfileAboutComponent;
  let fixture: ComponentFixture<ProfileAboutComponent>;

  const data: EmployeeData = CvDataFactory.createInstance().employee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAboutComponent, TranslationsTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAboutComponent);
    component = fixture.componentInstance;
    component.profile = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
