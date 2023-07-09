import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { ProductsService } from './product/products.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailProductComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
