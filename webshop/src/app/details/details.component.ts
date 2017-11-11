import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  @Input() book: Object;

  constructor() {
   }

  ngOnInit() {
  }

}
