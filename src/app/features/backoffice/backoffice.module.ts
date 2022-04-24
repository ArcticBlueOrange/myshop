import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeComponent } from './backoffice.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { BackofficeHeroComponent } from './backoffice-hero/backoffice-hero.component';
import { BackofficeNewsComponent } from './backoffice-news/backoffice-news.component';
import { BackofficeProductComponent } from './backoffice-product/backoffice-product.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    BackofficeHeroComponent,
    BackofficeNewsComponent,
    BackofficeProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BackofficeComponent}
    ])
  ]
})
export class BackofficeModule { }
