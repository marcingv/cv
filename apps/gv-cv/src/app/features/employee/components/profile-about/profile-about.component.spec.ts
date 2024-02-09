import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutComponent } from './profile-about.component';
import { EmployeeData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import { TranslationsTestingModule } from '@app/testing/translations';

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
