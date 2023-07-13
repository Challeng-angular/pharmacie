import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers:[ProductsService]
})
export class ListProductsComponent implements OnInit {
 productsList: Product[];
  

  constructor(
    //injection du service
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsList = this.productsService.getProductsList();
  }
}
