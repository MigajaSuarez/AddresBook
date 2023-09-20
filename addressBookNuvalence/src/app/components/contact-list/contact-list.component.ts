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
  allContactsArray!: contact[];
  contactsArray!: contact[];
  selectedForDetails = -1;
  pageNumAdder=1;

  

  constructor(public connection: ConnectionService) {}

  ngOnInit(): void {
    this.connection.getContactList(50).subscribe({
      next: (res: contactsInter) => {
        this.allContactsArray = (res.results).sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
        this.contactsArray= this.allContactsArray.slice(0,10); 
      },
      error: (err: Error) => {
        console.error(err);
      },
      complete: () => {},
    });
  }
  goToPage(page: number) {
    this.hideDetails();
    this.pageNumAdder= page*10-9
    this.contactsArray=this.allContactsArray.slice(page*10-10, page*10)
  }
  showDetails(i: number) {
    this.selectedForDetails = i;
  }
  hideDetails(){
    this.selectedForDetails=-1
  }
}
