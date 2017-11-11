import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  bookService;
  searchString;
  
  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit() {
  }

  onKeyDown(){
    this.bookService.searchFor(this.searchString);
  }
}
