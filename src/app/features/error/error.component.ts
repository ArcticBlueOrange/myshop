import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'ac-error',
  template: `
   <div
     [class]="class"
     *ngIf="formRef?.invalid"
      >
      {{message}}
     <!-- *ngIf="formRef?.invalid && formRef?.dirty" -->
   </div>
  `,
})
export class ErrorComponent implements OnInit {

  @Input() message: string = '';
  @Input() formRef: NgModel | null = null;
  @Input() class: string = "text-white round-border my-errorfield";

  constructor() { }

  ngOnInit(): void { }


}
