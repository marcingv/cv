import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesExperienceListComponent } from './languages-experience-list.component';

describe('LanguagesExperienceListComponent', () => {
  let component: LanguagesExperienceListComponent;
  let fixture: ComponentFixture<LanguagesExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesExperienceListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
