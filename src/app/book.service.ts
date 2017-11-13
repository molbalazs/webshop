import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  public bookInfo$ = new Subject();

  constructor(private http: HttpClient) { }

  public searchFor(volume) {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + encodeURI(volume))
      .map(response => response['items'].map(book => book['volumeInfo']))
      .subscribe(response => this.bookInfo$.next(response));
  }
}
