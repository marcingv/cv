import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvLayoutComponent } from './cv-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { By } from '@angular/platform-browser';
import { QueryParams } from '@gv-cv/angular-util-router';

describe('CvLayoutComponent', () => {
  let component: CvLayoutComponent;
  let fixture: ComponentFixture<CvLayoutComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLayoutComponent],
      providers: [provideMockStore()],
    })
      .overrideComponent(CvLayoutComponent, {
        set: {
          imports: [AsyncPipe, NgTemplateOutlet],
          schemas: [NO_ERRORS_SCHEMA],
        },
      })
      .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display layout in normal mode', () => {
    store.setState({
      router: {
        state: {
          root: {
            queryParams: undefined,
          },
        },
      },
    });

    fixture.detectChanges();

    const mainTag = fixture.debugElement.query(By.css('main'));
    const printingLayoutTag = fixture.debugElement.query(
      By.css('gv-cv-printing-layout'),
    );

    expect(mainTag).toBeTruthy();
    expect(printingLayoutTag).toBeFalsy();
  });

  it('should wrap content in printing layout', () => {
    store.setState({
      router: {
        state: {
          root: {
            queryParams: {
              [QueryParams.PRINTING]: true,
            },
          },
        },
      },
    });

    fixture.detectChanges();

    const mainTag = fixture.debugElement.query(By.css('main'));
    const printingLayoutTag = fixture.debugElement.query(
      By.css('gv-cv-printing-layout'),
    );

    expect(mainTag).toBeTruthy();
    expect(printingLayoutTag).toBeTruthy();
  });
});
