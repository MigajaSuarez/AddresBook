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
  $contactsArray!: contact[];
  selectedForDetails = -1;
  

  constructor(public connection: ConnectionService) {}

  ngOnInit(): void {
    this.connection.getContactList(10, 1).subscribe({
      next: (res: contactsInter) => {
        this.$contactsArray = res.results;
      },
      error: (err: Error) => {
        console.error(err);
      },
      complete: () => {},
    });
  }
  goToPage(page: number) {
    this.connection.getContactList(10, page).subscribe({
      next: (res: contactsInter) => {
        console.log(res);
        this.$contactsArray = res.results;
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  showDetails(i: number) {
    this.selectedForDetails = i;
  }
  hideDetails(){
    this.selectedForDetails=-1
  }
}
