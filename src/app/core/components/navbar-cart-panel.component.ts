import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ac-navbar-cart-panel',
  templateUrl: './navbar-cart-panel.component.html',
  styles: [
  ]
})
export class NavbarCartPanelComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
