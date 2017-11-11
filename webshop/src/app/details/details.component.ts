import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BookService } from '../book.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  @Input() book: Object;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    let cookie = this.cookieService.getObject('webshopCookieUniqueId');
    console.log('cookie:', cookie);
  }

  cart(book){
    console.log('put in cart:', book);
    this.cookieService.put('webshopCookieUniqueId', JSON.stringify(book));
  }

}
