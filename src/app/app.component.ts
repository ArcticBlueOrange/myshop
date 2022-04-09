import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  product: Product = {
    "id": 1,
    "label": "myMac",
    "description": "Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.",
    "image": "https://res.cloudinary.com/my-notes-demo/image/upload/v1627760417/academy/imac.png",
    "memory": 16000,
    "storage": 2000000,
    "display": 24,
    "price": 1500,
    "colors": [
      "mediumpurple", "red", "yellow", "aquamarine", "deepskyblue"
    ]
  };

}
