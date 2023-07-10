import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { ProductsService } from './services/products.service';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PromotionsComponent,
    ButtonsComponent,
    FooterComponent,
    CardDetailsComponent,
    NewslettersComponent,
    FormComponent,
    NavbarComponent,
    DetailProductComponent,
    AboutUsComponent,
    ListProductsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
