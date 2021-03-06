import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';

const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-backoffice-product',
  templateUrl: './backoffice-product.component.html',
  styles: [
  ]
})
export class BackofficeProductComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  urlRegex = /(https?:\/\/)([a-zA-Z0-9\-_.]+)(\.[a-zA-Z]+)(\/[/a-zA-Z0-9\-_.]*)/;
  colors: string[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>(`${baseUrl}/products`).subscribe(res => this.products = res);
  }

  saveHandler(f: NgForm) {
    console.log(f.value);
    if (this.selectedProduct) {
      this.editHandler(f);
    } else {
      this.addHandler(f);
    }
  }

  editHandler(f: NgForm) {
    this.http.patch<Product>(`${baseUrl}/products/${this.selectedProduct?.id}`, { ...f.value, colors: this.colors }).subscribe(
      res => {
        this.products = this.products.map(p => {
          return p.id === this.selectedProduct?.id ? res : p;
        })
      })
  }

  addHandler(f: NgForm) {
    this.http.post<Product>(`${baseUrl}/products`, { ...f.value, colors: this.colors }).subscribe(
      res => this.products = [...this.products, res]
    )
    f.reset();
  }

  deleteHandler(f: NgForm) {
    this.http.delete<Product>(`${baseUrl}/products/${this.selectedProduct?.id}`)
      .subscribe(res => {
        this.products = this.products.filter(p => p.id !== this.selectedProduct?.id);
        this.selectedProduct = null;
        this.colors = [];
      })
  }

  selectProduct(p: Product | null) {
    if (this.selectedProduct === p) {
      this.selectedProduct = null;
      this.colors = [];
    } else {
      this.selectedProduct = p;
      this.colors = p ? p.colors : [];
    }
  }
}
