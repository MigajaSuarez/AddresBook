import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Output() goToPageEvent = new EventEmitter<number>();
  maxPages = 5;
  arrayForPagination: number[] = [];
  selected=0

  ngOnInit() {
    for (let i = 1; i <= this.maxPages; i++) {
      this.arrayForPagination.push(i);
    }
    this.selected= 1;
  }
  goToPage(pageNumber: number) {
    this.selected= pageNumber;
    this.goToPageEvent.emit(pageNumber);
  }
  firstPage() {
    this.selected= 1;
    this.goToPageEvent.emit(1);
  }
  lastPage() {
    this.selected= this.arrayForPagination.length;
    this.goToPageEvent.emit(this.arrayForPagination.length);
  }
}
