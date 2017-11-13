import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

describe('SearchComponent', () => {
  const ENTER_EVENT = new KeyboardEvent('keyup', { key: 'Enter' } );
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let bookService: any;
  let textAreaElement: any;

  beforeEach(() => {
    bookService = jasmine.createSpyObj('BookService', ['searchFor']);
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: BookService, useValue: bookService }
      ],
      declarations: [ SearchComponent ]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    textAreaElement = fixture.debugElement.query(By.css('.searchField')).nativeElement;
  });

  it('calls bookService.searchFor when hitting enter', () => {
    textAreaElement.dispatchEvent(ENTER_EVENT);
    expect(bookService.searchFor).toHaveBeenCalled();
  });

  it('calls bookService.searchFor with the input string', () => {
    const searchText = 'search text';
    textAreaElement.value = searchText;
    textAreaElement.dispatchEvent(new Event('input'));
    textAreaElement.dispatchEvent(ENTER_EVENT);
    expect(bookService.searchFor).toHaveBeenCalledWith(searchText);
  });
});
