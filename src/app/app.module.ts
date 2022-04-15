import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './features/shop/shop.component';
import { CartComponent } from './features/cart/cart.component';
import { BackofficeComponent } from './features/backoffice/backoffice.component';
import { ErrorComponent } from './features/error/error.component';
import { BackofficeProductComponent } from './features/backoffice/backoffice-product/backoffice-product.component';
import { BackofficeNewsComponent } from './features/backoffice/backoffice-news/backoffice-news.component';
import { BackofficeHeroComponent } from './features/backoffice/backoffice-hero/backoffice-hero.component';
import { HeroComponent } from './features/hero/hero.component';
import { NavbarComponent } from './core/components/navbar.component';
import { ShopItemCardComponent } from './features/shop/components/shop-item-card.component';
import { ShopItemNewsComponent } from './features/shop/components/shop-item-news.component';
import { ShopNewsletterComponent } from './features/shop/components/shop-newsletter.component';
import { ProductComponent } from './features/product/product.component';
import { ColorPickerComponent } from './shared/components/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    BackofficeComponent,
    ErrorComponent,
    BackofficeProductComponent,
    BackofficeNewsComponent,
    BackofficeHeroComponent,
    HeroComponent,
    NavbarComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopNewsletterComponent,
    ProductComponent,
    ColorPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
      { path: 'backoffice', component: BackofficeComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
