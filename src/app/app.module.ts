import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { CardComponent } from './components/card/card.component';
import { ProductsService } from './product/products.service';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { CgvComponent } from './components/pages/cgv/cgv.component';
import { BlocTitleComponent } from './components/bloc-title/bloc-title.component';
import { BlocPresentationComponent } from './components/bloc-presentation/bloc-presentation.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { OverviewOrderComponent } from './components/pages/overview-order/overview-order.component';
import { HeaderComponent } from './components/layouts/header/header.component';

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
    FormComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
