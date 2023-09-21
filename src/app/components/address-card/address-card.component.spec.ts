import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressCardComponent } from './address-card.component';
import { testJson } from '../../mockups/contact-mock';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressCardComponent],
    });
    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;
    //input mock of contact
    component.selectedContact = testJson;
    fixture.detectChanges();
  });

  // Test case 1: Ensure that the component is created
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // Test case 2: Ensure that contact details are correctly rendered
  it('should render contact info', () => {
    const compiled = fixture.nativeElement;
    const contactName = compiled.querySelector('.card-title');
    const imgUrl = compiled.querySelector('.contact-img').getAttribute('src'); // Get the src attribute 
    const mobileNumber = compiled.querySelector('#mobile');
  
    // Verify that the rendered name string matches the mock data
    expect(contactName.textContent).toContain('Akash Pujari');
    // Verify that the rendered img url source contains the mock data URL substring
    expect(imgUrl).toContain('https://randomuser.me/api/portraits/men/56.jpg');
    // Verify that the rendered mobile number matches the mock data
    expect(mobileNumber.textContent).toBe('7871495761');
  });
});
