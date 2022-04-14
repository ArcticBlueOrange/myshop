import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Page } from '../../model/page';

@Component({
  selector: 'ac-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  @Output() selectPage = new EventEmitter<Page>();

  ngOnInit(): void {
  }

}
