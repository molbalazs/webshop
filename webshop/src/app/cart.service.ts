import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  private COOKIE_KEY = '002';
  private cartContent;

  public cartContent$ = new Subject();

  constructor(private cookieService: CookieService) { 
    const cookieContent = JSON.parse(this.cookieService.get(this.COOKIE_KEY));
    this.cartContent = cookieContent ? cookieContent : [];
    this.cartContent$.next(this.cartContent);    
  }
  
  removeBook(book){
    this.cartContent = this.cartContent.filter(bookInCart => bookInCart.title !== book.title );
    this.saveCartState();
  }

  addBook(book){
    const bookEssence = {title: book.title, authors: book.authors};
    this.cartContent.push(bookEssence);
    this.saveCartState();
  }

  private saveCartState(){
    this.cartContent$.next(this.cartContent);

    const stringifiedContent = JSON.stringify(this.cartContent);
    this.cookieService.put(this.COOKIE_KEY, JSON.stringify(this.cartContent));
  }

  getCart(){
    return this.cartContent;
  }
}