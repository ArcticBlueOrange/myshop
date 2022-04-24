import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductComponent } from './product.component';




@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // FormsModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
    ])
  ]
})
export class ProductModule { }
