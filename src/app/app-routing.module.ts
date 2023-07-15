import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';
import { CgvComponent } from './components/pages/cgv/cgv.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { OverviewOrderComponent } from './components/pages/overview-order/overview-order.component';

const routes: Routes = [
  { path: 'test', component: ContactFormComponent},
  { path: 'accueil', component: HomeComponent },
  { path: 'produits', component: ListProductsComponent },
  { path: 'produit/:id', component: DetailProductComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'apropos', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'overview-order', component: OverviewOrderComponent },
  { path: 'conditions-generales-vente', component: CgvComponent },
  { path: 'conditions-generales-utilisation', component: CguComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
