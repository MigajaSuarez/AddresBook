import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { of } from 'rxjs';
import { resultMockJson } from '../../mockups/results-mock';

describe('ContactListComponent1', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let connectionService: jasmine.SpyObj<ConnectionService>;

  beforeEach(() => {
    const connectionServiceSpy = jasmine.createSpyObj('ConnectionService', ['getContactList']);
    
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      providers: [{ provide: ConnectionService, useValue: connectionServiceSpy }],
    });

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    connectionService = TestBed.inject(ConnectionService) as jasmine.SpyObj<ConnectionService>;
  });

// Test case 1: Ensure that the component is created
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test case 2: Ensure that the component make the call for data on init and consistency of data
  it('should call getCompleteContactList on ngOnInit', () => {
    //input mock of results already sorted by first name
    const mockContacts = { results: resultMockJson };
    connectionService.getContactList.and.returnValue(of(mockContacts));

    component.ngOnInit();
    // Verify that the method getContactList have been called
    expect(connectionService.getContactList).toHaveBeenCalledOnceWith(50);
    // Verify consistency of data
    expect(component.allContactsArray).toEqual(mockContacts.results);
    expect(component.contactsArray).toEqual(mockContacts.results.slice(0, 10));
  });

  // Test case 1: Ensure that the component displays error modal when data call fails
  it('should display error modal when request fails', ()=>{
    const compiled = fixture.nativeElement;
    const error =new Error('this is an error on data load')
    const modalElement = compiled.querySelector('#errorMessage');
    
    component.failedDataLoad(error)

    // Verify the modal is rendered
    expect(modalElement.textContent).toContain('Ooops! Something went wrong')

  })
 
});

