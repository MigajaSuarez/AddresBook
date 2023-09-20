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
    for (let i = 1; i <= this.maxPages + 1; i++) {
      this.arrayForPagination.push(i);
    };
  }
  goToPage(pageNumber:number){
    console.log('this is selected',pageNumber);
    this.goToPageEvent.emit(pageNumber);
  }
  firstPage(){

  }
  lastPage(){

  }
}
