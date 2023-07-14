import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  discountedPrices: number[] = [];
  isDiscount: boolean = false;
  discountPercentage: number;


  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }


  ngOnInit() :void{
    this.productsList = this.productsService.getProductsList(); 
    this.productsList.forEach(product => {
      if (product.isDiscount && product.discountPercentage) {
        const discount = (product.discountPercentage / 100) * product.price;
        const discountedPrice = product.price - discount;
        this.discountedPrices.push(discountedPrice);
      } else {
        this.discountedPrices.push(product.price);
      }
    });

  }

  goToProduct(product: Product) {
    this.router.navigate(["/produit", product.id ])
  }

 
}
