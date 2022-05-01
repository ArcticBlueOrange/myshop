import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'ac-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  product: Product | null = null;
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }
  selectedColor: string | null = null;

  ngOnInit(): void {
    const productId: string = this.activatedRoute.snapshot.params['id'];
    this.http.get<Product>(`http://localhost:3000/products/${productId}`).subscribe(res => this.product = res);
  }

  addToCartHandler(): void {
    if (this.product && this.selectedColor)
      this.cartService.addItem(this.product, this.selectedColor)
    // console.log(`Cart contains ${this.cartService.items.length} items for a total of ${this.cartService.getTotalCartAmount()}€`)
    // console.log(this.product, this.selectedColor);
  }

}
