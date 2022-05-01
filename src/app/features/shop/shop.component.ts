import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { News } from '../../model/news';
import { Hero } from '../../model/hero';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CartService } from 'src/app/core/services/cart.service';

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../../app.component.css']
})
export class ShopComponent implements OnInit {

  hero: Hero | null = null;
  products: Product[] = [];
  news: News[] = [];
  subscribed: string | null = null;
  selectedColor: string | null = null;

  constructor(private http: HttpClient,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.http.get<Hero>(`${baseUrl}/hero`).subscribe(res => this.hero = res);
    this.http.get<Product[]>(`${baseUrl}/products`).subscribe(res => this.products = res);
    this.http.get<News[]>(`${baseUrl}/news`).subscribe(res => this.news = res);
    console.log(this.subscribed);
  }

  addToCartHandler(params: { product: Product; color: string | null }) {
    this.cartService.addItem(params.product, params.color);
    // console.log(`Cart contains ${this.cartService.items.length} items for a total of ${this.cartService.getTotalCartAmount()}€`)
  }

}
