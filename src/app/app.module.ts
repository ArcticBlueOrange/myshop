import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './features/shop/shop.module';
import { BackofficeModule } from './features/backoffice/backoffice.module';
import { ProductModule } from './features/product/product.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/components/navbar.component';
import { Page404Component } from './features/page404/page404.component';
import { NotificationComponent } from './core/components/notification.component';
import { NavbarcartPanelComponent } from './core/components/navbarcart-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page404Component,
    NotificationComponent,
    NavbarcartPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // SharedModule,
    RouterModule.forRoot([
      { path: 'shop', loadChildren: () => import('./features/shop/shop.module').then(m => m.ShopModule)},
      { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)},
      { path: 'backoffice', loadChildren: () => import('./features/backoffice/backoffice.module').then(m => m.BackofficeModule)},
      { path: 'product/:id', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)},
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      { path: '404', component: Page404Component },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
