import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product: Product;

  constructor(
    //injection du service
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    
    // this.productsService.getProduct(id);
  }
}
