import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})

export class CardComponent implements OnInit {
  productsList: Product[];
  product: Product;
  discountedPrice: number;
  isDiscount: boolean  = false;


  constructor(
    private productsService: ProductsService
  ) {}


  ngOnInit() {
    this.productsList = this.productsService.getProductsList();
    
    if (this.product.isDiscount) {
      const discountPercentage = this.product.discountPercentage;
      this.discountedPrice = this.product.price - (this.product.price * discountPercentage / 100);
    } else {
      this.discountedPrice = this.product.price;
    }
  }


}
