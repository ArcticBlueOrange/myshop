import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'ac-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  product: Product | null = null;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  selectedColor: string | null = null;

  ngOnInit(): void {
    const productId: string = this.activatedRoute.snapshot.params['id'];
    this.http.get<Product>(`http://localhost:3000/products/${productId}`).subscribe(res => this.product = res);
  }

  addToCartHandler(): void {
    console.log(this.product, this.selectedColor);
  }

}
