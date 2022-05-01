import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  constructor(
    private notificationService: NotificationService,
    private http: HttpClient
  ) { }

  addItem(productToAdd: Product, selectedColor: string | null) {
    // console.log(productToAdd, selectedColor);
    const itemFound: CartItem | undefined = this.items.find(item => {
      return item.product.id === productToAdd.id &&
        item.color === selectedColor;
    })
    if (itemFound) {
      itemFound.quantity += 1;
      this.notificationService.show("Same product/color added once more")
    } else {
      if (selectedColor) {

        this.items = [
          ...this.items,
          {
            product: productToAdd,
            quantity: 1,
            color: selectedColor
          }]
        this.notificationService.show("New Product/color added to the cart")
      }
    }
  }

  removeItem(itemToDelete: CartItem) {
    this.items = this.items.filter(
      item => {
        return !(item.product.id === itemToDelete.product.id)
      }
    )
    console.log(itemToDelete);
  }
  incrementQuantity(itemToUpdate: CartItem) {
    // console.log(itemToUpdate)
    if (itemToUpdate.quantity < 5) {
      this.items = this.items.map(item => {
        return item.product.id === itemToUpdate.product.id && item.color === itemToUpdate.color ?
          { ...item, quantity: item.quantity + 1 } :
          { ...item }
      })
    }
  }
  decreaseQuantity(itemToUpdate: CartItem) {
    // console.log(itemToUpdate)
    if (itemToUpdate.quantity > 1) {
      this.items = this.items.map(item => {
        return item.product.id === itemToUpdate.product.id && item.color === itemToUpdate.color ?
          { ...item, quantity: item.quantity - 1 } :
          { ...item }
      })
    }
  }
  orderNow(formData: any) {
    console.log(formData);
  }
  getTotalCartAmount() {
    return this.items.reduce((acc, item) => {
      return acc + (item.quantity * item.product.price);
    }, 0)
  }

}
