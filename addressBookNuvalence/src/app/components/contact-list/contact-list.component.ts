import { Component, OnInit } from '@angular/core';
import { contactsInter } from 'src/app/Interfaces/contacts';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  contactsArray!: { gender: string; name: { title: string; first: string; last: string; }; location: { street: { number: number; name: string; }; city: string; state: string; country: string; postcode: number; }; email: string; phone: string; cell: string; picture: { large: string; medium: string; thumbnail: string; }; }[];
  constructor ( public connection: ConnectionService){ }

  ngOnInit(): void{
    this.connection.getContactList(10).subscribe({
      next: (res: contactsInter) =>{
        console.log(res)
        this.contactsArray= res.results
      },
      error : (err: Error)=>{
        console.log(err)
      },
      complete: ()=>{}
    })
  }
}

