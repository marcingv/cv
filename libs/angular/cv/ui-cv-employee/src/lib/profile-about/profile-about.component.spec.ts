import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileAboutComponent } from './profile-about.component';
import { CvDataFactory, EmployeeData } from '@gv-cv/shared-util-types';
import { TranslationsTestingModule } from '@gv-cv/angular-feature-translations';

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
