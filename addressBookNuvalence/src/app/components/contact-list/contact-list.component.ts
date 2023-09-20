import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { contactsInter } from 'src/app/Interfaces/contacts';
import { contact } from 'src/app/Interfaces/oneContact';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  //all contacts array
  allContactsArray!: contact[];
  //contacts array to be displayed in each page
  contactsArray!: contact[];
  //for display the number
  selectedForDetails = -1;
  //for keeping numeration consistent with page number
  pageNumAdder = 1;
  // boolean for succes of data loading
  loadSuccess = false;

  constructor(public connection: ConnectionService) {}

  /**
   * Behavior on Init
   */
  ngOnInit(): void {
    this.getCompleteContactList(50);
  }

  /**
   * Get complete contacts list from API
   * @param numberOfContacts number of contacts requested - value is 50
   */
  getCompleteContactList(numberOfContacts: number) {
    //get the contacts info from API an build the array of contactas to be displayed
    this.connection.getContactList(numberOfContacts).subscribe({
      next: (res: contactsInter) => {
        this.loadSuccess = true;
        //all contacts Array sort ascending by first name
        this.allContactsArray = res.results.sort((a, b) =>
          a.name.first > b.name.first ? 1 : b.name.first > a.name.first ? -1 : 0
        );
        //contacts to be displayed in the first page
        this.contactsArray = this.allContactsArray.slice(0, 10);
      },
      error: (err: Error) => {
        this.failedDataLoad(err);
      },
      complete: () => {},
    });
  }

  /**
   * change the data to be deplayed according to user selection of page
   * @param page number of the selected page
   */
  goToPage(page: number) {
    this.hideDetails();
    this.pageNumAdder = page * 10 - 9;
    this.contactsArray = this.allContactsArray.slice(page * 10 - 10, page * 10);
  }

  /**
   * change index to the selected contact by user
   * @param i number of contact selected by user
   */
  showDetails(i: number) {
    this.selectedForDetails = i;
  }

  /**
   * change index to the selected contact to -1 for not displaying any details view
   */
  hideDetails() {
    this.selectedForDetails = -1;
  }

  /**
   * reload page
   */
  reloadPage() {
    window.location.reload();
  }
  
  /**
   * trigers fail behavior on data load error
   * @param err error form http
   */
  failedDataLoad(err: Error) {
    let myModal = new bootstrap.Modal('#errorModal', {});
    myModal.show();
    this.loadSuccess = false;
    console.error(err);
  }
}
