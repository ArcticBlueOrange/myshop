import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Page } from '../../model/page';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { NotificationComponent } from './notification.component';

@Component({
  selector: 'ac-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  showCartPreview : boolean = false;
  constructor( public notificationService: NotificationService,
    public cartService: CartService) {
    // this.notificationService.show("Welcome!")

  }
}
