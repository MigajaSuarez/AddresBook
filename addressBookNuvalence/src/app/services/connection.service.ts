import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactsInter } from '../Interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  //API
  private apiUrl='https://randomuser.me/api/'
  
  constructor(public http: HttpClient, ) { }
  
  /**
   * http get call to API for contacts
   * @param numberOfContacts Number of contacts to fetch from API 
   * @returns Observable with http response
   * seed=nuvalence => for get the same data on each request 
   * exlude=gender,nat,login,dob,registered =>information excluded form call
   */
  getContactList(numberOfContacts:number): Observable <any>{
    return this.http.get<contactsInter>( this.apiUrl + `?seed=nuvalence&results=${numberOfContacts}&exc=gender,nat,login,dob,registered`);
  }
}
