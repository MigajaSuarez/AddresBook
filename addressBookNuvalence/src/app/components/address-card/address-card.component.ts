import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { contact } from 'src/app/Interfaces/oneContact';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit, OnDestroy {
  @Input() selectedContact: contact | undefined ;
  thumbnail:string | undefined;
  ngOnInit(): void {
    this.thumbnail= this.selectedContact?.picture?.thumbnail
  }
  ngOnDestroy(): void {
    
  }
}
