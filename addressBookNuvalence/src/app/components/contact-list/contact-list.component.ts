import { Component, OnInit } from '@angular/core';
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
  pageNumAdder=1;

  constructor(public connection: ConnectionService) {}

  /**
   * Behavior on Init
   */
  ngOnInit(): void {
    //get the contacts info from API an build the array of contactas to be displayed
    this.connection.getContactList(50).subscribe({
      next: (res: contactsInter) => {
        //all contacts Array
        this.allContactsArray = (res.results).sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
        //contacts to be displayed in the first page
        this.contactsArray= this.allContactsArray.slice(0,10); 
      },
      error: (err: Error) => {
        console.error(err);
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
    this.pageNumAdder= page*10-9
    this.contactsArray=this.allContactsArray.slice(page*10-10, page*10)
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
  hideDetails(){
    this.selectedForDetails=-1
  }
}
