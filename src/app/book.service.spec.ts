import { BookService } from './book.service';
import { Observable } from 'rxjs/Observable';
import { Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/observable/of';

describe('BookService', () => {
  const GOOGLE_API_URL = 'https://www.googleapis.com/books/v1/volumes';
  let http: any;
  let bookService: any;

  beforeEach(() => {
    http = jasmine.createSpyObj('Http', ['get']);
    bookService = new BookService(http);

    const TEST_RESPONSE = {items:[]};
    http.get.and.returnValue(Observable.of(TEST_RESPONSE));
  });

  it('should call the endpoint with the test string', () => {
    const testString = 'testString';
    bookService.searchFor(testString);
    expect(http.get).toHaveBeenCalledWith(GOOGLE_API_URL + '?q=' + testString);
  });

  it('should escape the search string string', () => {
    const testString = 'test string with space';
    const escapedTestString = 'test%20string%20with%20space';
    bookService.searchFor(testString);
    expect(http.get).toHaveBeenCalledWith(GOOGLE_API_URL + '?q=' + escapedTestString);
  });
});
