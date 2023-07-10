import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { PromotionsComponent } from './components/pages/promotions/promotions.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';

const routes: Routes = [

  { path: 'apropos', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'produits', component: ListProductsComponent },
  { path: 'produit/:id', component: DetailProductComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: ' ', redirectTo: 'accueil', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
