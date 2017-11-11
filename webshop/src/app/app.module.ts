import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookService } from './book.service';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    DetailsComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
