import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'ac-shop-item-card',
  templateUrl: './shop-item-card.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ShopItemCardComponent implements OnInit {

  @Output() addToCart = new EventEmitter<{ product: Product, color: string | null }>();
  @Input() product!: Product;
  selectedColor: string | null = null;

  chooseColor(color: string) {
    if (this.selectedColor == color)
      this.selectedColor = null;
    else
      this.selectedColor = color;
  }

  constructor() { }
  ngOnInit(): void { }

}
