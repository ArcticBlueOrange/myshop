import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { News } from '../../model/news';
import { Hero } from '../../model/hero';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Hero>(`${baseUrl}/hero`).subscribe(res => this.hero = res);
    this.http.get<Product[]>(`${baseUrl}/products`).subscribe(res => this.products = res);
    this.http.get<News[]>(`${baseUrl}/news`).subscribe(res => this.news = res);
    console.log(this.subscribed);
  }

  selectedColor: string | null = null;

  addToCartHandler(params: { product: Product; color: string | null }) {
    console.log(params.product, params.color);
  }

}
