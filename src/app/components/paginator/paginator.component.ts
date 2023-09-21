import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  // output of selected page in the paginator
  @Output() goToPageEvent = new EventEmitter<number>();
  // max of pages
  maxPages = 5;
  // array of numbers for paginator
  arrayForPagination: number[] = [];
  //slectedPage for active css class
  selected=0

  /**
   * Behavior on init
   */
  ngOnInit() {
    for (let i = 1; i <= this.maxPages; i++) {
      this.arrayForPagination.push(i);
    }
    this.selected= 1;
  }

  /**
   * emit the page number selected by user
   * @param pageNumber number of page selected by user
   */
  goToPage(pageNumber: number) {
    this.selected= pageNumber;
    this.goToPageEvent.emit(pageNumber);
  }

  /**
   * emit the number one when user selected go to first page
   */
  firstPage() {
    this.selected= 1;
    this.goToPageEvent.emit(1);
  }

  /**
   * emit the number of the last page when user selected go to last page
   */
  lastPage() {
    this.selected= this.arrayForPagination.length;
    this.goToPageEvent.emit(this.arrayForPagination.length);
  }
}
