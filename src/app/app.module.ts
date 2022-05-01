import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/components/navbar.component';
import { Page404Component } from './features/page404/page404.component';
import { NotificationComponent } from './core/components/notification.component';
import { NavbarCartPanelComponent } from './core/components/navbar-cart-panel.component';

import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page404Component,
    NotificationComponent,
    NavbarCartPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'shop', loadChildren: () => import('./features/shop/shop.module').then(m => m.ShopModule) },
      { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
      { path: 'backoffice', loadChildren: () => import('./features/backoffice/backoffice.module').then(m => m.BackofficeModule) },
      { path: 'product/:id', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      { path: '404', component: Page404Component },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ])
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'it'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
