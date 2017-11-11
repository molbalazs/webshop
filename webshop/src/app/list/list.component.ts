import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  books = [];

  @Output() selectBook: EventEmitter<Object> = new EventEmitter();

  constructor(private bookService: BookService) {
    bookService.bookInfo$.subscribe(bookInfo => {this.books = <[any]>bookInfo; console.log(this.books)});
  }

  ngOnInit() {
  }

}
