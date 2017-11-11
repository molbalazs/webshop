import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  books;

  constructor(bookService: BookService) {
    bookService.bookInfo$.subscribe(bookInfo => this.books = bookInfo);
  }

  ngOnInit() {
  }

}
