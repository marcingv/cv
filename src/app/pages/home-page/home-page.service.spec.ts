import { TestBed } from '@angular/core/testing';
import { HomePageService } from './home-page.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomePageService', () => {
  let service: HomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePageService, provideMockStore()],
    });

    service = TestBed.inject(HomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
