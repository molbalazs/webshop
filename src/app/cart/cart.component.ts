import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  cartContent;

  constructor(private cartService: CartService) {
    this.cartService.cartContent$.subscribe(cartContent => this.cartContent = cartContent);
   }

  ngOnInit() {
    this.cartContent = this.cartService.getCart();
  }

  removeBook(book) {
    this.cartService.removeBook(book);
  }
}
