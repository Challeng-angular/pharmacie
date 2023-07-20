
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { CardComponent } from './components/card/card.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { ProductsService } from './product/products.service';
import { CgvComponent } from './components/pages/cgv/cgv.component';
import { BlocTitleComponent } from './components/bloc-title/bloc-title.component';
import { BlocPresentationComponent } from './components/bloc-presentation/bloc-presentation.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { OverviewOrderComponent } from './components/pages/overview-order/overview-order.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HomeComponent,
    ContactComponent,
    PromotionsComponent,
    ButtonsComponent,
    FooterComponent,
    CardDetailsComponent,
    NewslettersComponent,
    NavbarComponent,
    AboutUsComponent,
    ListProductsComponent,
    CardComponent,
    CguComponent,
    CgvComponent,
    BlocTitleComponent,
    BlocPresentationComponent,
    ServicesComponent,
    OverviewOrderComponent,
    HeaderComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
