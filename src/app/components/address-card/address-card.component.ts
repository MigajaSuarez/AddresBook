import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { contact } from 'src/app/Interfaces/oneContact';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})

export class AddressCardComponent {
  // Input of a selected contact information to display detail view
  @Input() selectedContact!: contact ;

}
