import { Component } from '@angular/core';
import { Product } from 'src/app/mock-product/product';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  productsList: Product[];


 
}
