import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'ac-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../app.component.css'],
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitHandler(formData: any) {
    console.log(formData);
  }

  checkField(input: NgModel) {
    return { 'is-invalid': (input.invalid || input.value === 'null') && input.dirty, 'is-valid': input.valid };
  }

  emailRegex = /^[\w\d_\-.]*@[\w\d_]*\.\w{2,3}$/;

}
