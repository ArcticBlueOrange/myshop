import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { ShopComponent } from './shop.component';
import { HeroComponent } from '../hero/hero.component';
import { ShopItemCardComponent } from './components/shop-item-card.component';
import { ShopItemNewsComponent } from './components/shop-item-news.component';
import { ShopNewsletterComponent } from './components/shop-newsletter.component';

@NgModule({
  declarations: [
    ShopComponent,
    HeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopNewsletterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShopComponent }
    ]),
    SharedModule,
  ]
})
export class ShopModule { }
