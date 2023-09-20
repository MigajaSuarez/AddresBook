import { contact } from "./oneContact";
//json response interface
export interface contactsInter {
  results: contact[],
  info?: {};
}
