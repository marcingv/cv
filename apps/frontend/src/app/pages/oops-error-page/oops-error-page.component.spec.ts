import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OopsErrorPageComponent } from './oops-error-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationsTestingModule } from '../../testing/translations';

@Component({
  selector: 'app-router-outlet-stub',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet],
})
class AppRouterOutletStubComponent {}

xdescribe('OopsErrorPageComponent', () => {
  let component: AppRouterOutletStubComponent;
  let fixture: ComponentFixture<AppRouterOutletStubComponent>;

  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRouterOutletStubComponent,
        OopsErrorPageComponent,
        RouterTestingModule.withRoutes([
          { path: 'error', component: OopsErrorPageComponent },
        ]),
        TranslationsTestingModule,
      ],
      providers: [provideMockStore()],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppRouterOutletStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message from navigation extras', async () => {
    const thrownError: Error = new Error('Some error occurred!');
    await router.navigate(['/error'], {
      state: { error: thrownError },
    });
    console.warn(location.path());
    expect(location.path()).toBe('/error');

    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.innerText).toContain(thrownError.message);
  });
});
