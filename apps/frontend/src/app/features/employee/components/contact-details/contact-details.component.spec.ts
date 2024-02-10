import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactData } from '../../../../domain/models';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  const data: ContactData = {
    phone: '123',
    country: 'Polska',
    city: 'Lublin',
    email: 'test@test.pl',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display full contact data', () => {
    const detailsRows = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'app-details-view-row',
    );
    const textContent: string =
      (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(detailsRows.length).toEqual(3);
    expect(textContent).toContain(data.city);
    expect(textContent).toContain(data.country);
    expect(textContent).toContain(data.email!);
    expect(textContent).toContain(data.phone!);
  });
});
