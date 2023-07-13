import { Component } from '@angular/core';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
product: Product;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

    // this.productsService.getProduct(id);
  }
}
