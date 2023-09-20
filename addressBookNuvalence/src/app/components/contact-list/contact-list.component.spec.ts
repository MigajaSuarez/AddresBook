import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent]
    });
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error modal when request fails', ()=>{
    const error =new Error('this is an error on data load')
    component.failedDataLoad(error);
    const debugModalText: DebugElement = fixture.debugElement.query(By.css('#errorMessage'));
    expect(debugModalText).toBe('Ooops! Something went wrong')

  })
});
