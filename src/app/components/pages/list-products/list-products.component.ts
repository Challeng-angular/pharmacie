import { Component } from '@angular/core';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  productsList: Product[];


  constructor(

    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsList = this.productsService.getProductsList();
  }
}
