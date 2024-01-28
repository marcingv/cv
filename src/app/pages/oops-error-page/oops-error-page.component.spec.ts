import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OopsErrorPageComponent } from './oops-error-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('OopsErrorPageComponent', () => {
  let component: OopsErrorPageComponent;
  let fixture: ComponentFixture<OopsErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopsErrorPageComponent, RouterTestingModule],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(OopsErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
