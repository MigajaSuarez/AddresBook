import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactsInter } from '../Interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private apiUrl='https://randomuser.me/api/'
  constructor(public http: HttpClient, ) { }
  /**
   * 
   */
  getContactList(numberOfContacts:number): Observable <any>{
    return this.http.get<contactsInter>( this.apiUrl + `?seed=nuvalence&results=${numberOfContacts}&exc=gender,nat,login,dob,registered`);
  }
}
