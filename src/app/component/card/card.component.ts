import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  hasDiscount: boolean;
  discountPercentage: number;
  price: number;
  imageUrl: string;
  starsArray: number[];
  rating: number;
  discountedPrice?: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  
  
  
  product: Product = { 
    name: 'Shiba Inu',
    hasDiscount: true,
    discountPercentage: 30,
    price: 1999,
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    starsArray: [1, 2, 3, 4, 5],
    rating: 3
  };

  discountedPrice: number = 0;

  ngOnInit() {
    if (this.product.hasDiscount) {
      const discountPercentage = this.product.discountPercentage;
      this.discountedPrice = this.product.price - (this.product.price * discountPercentage / 100);
    } else {
      this.discountedPrice = this.product.price;
    }
  }
}
