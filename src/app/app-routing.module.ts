import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  { path: 'test', component: ContactFormComponent},
  { path: 'accueil', component: HomeComponent },
  { path: 'produits', component: ListProductsComponent },
  { path: 'produit/:id', component: DetailProductComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'apropos', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
