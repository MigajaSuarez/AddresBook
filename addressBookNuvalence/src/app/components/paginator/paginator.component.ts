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

  ngOnInit() {
    for (let i = 1; i <= this.maxPages; i++) {
      this.arrayForPagination.push(i);
    }
  }
  goToPage(pageNumber: number) {
    this.goToPageEvent.emit(pageNumber);
  }
  firstPage() {
    this.goToPageEvent.emit(1);
  }
  lastPage() {
    this.goToPageEvent.emit(this.arrayForPagination.length);
  }
}
