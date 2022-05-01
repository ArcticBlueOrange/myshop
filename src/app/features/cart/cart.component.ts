import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'ac-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../app.component.css'],
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {

  }

  submitHandler(formData: any) {
    // console.log(formData);
    this.cartService.orderNow(formData);
  }

  checkField(input: NgModel, checkDirty: boolean=false) {
    const startValue = checkDirty ? input.dirty : true;
    return { 'is-invalid': (input.invalid || input.value === 'null') && startValue, 'is-valid': input.valid };
  }

  emailRegex = /^[\w\d_\-.]*@[\w\d_]*\.\w{2,3}$/;
  expirationPattern = /^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$/;

}
