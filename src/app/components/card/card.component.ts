import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [ProductsService],
})

export class CardComponent implements OnInit {
  @Input() productsList: Product[];
  @Input() product: Product;
  discountedPrices: number[] = [];
  isDiscount: boolean = false;
  discountPercentage: number;


  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }


    ngOnInit(): void {
      this.productsList = this.productsService.getProductsList();

    }
    calculateDiscountedPrice(product: Product): number {
      if (product.isDiscount && product.discountPercentage) {
        const discount = (product.discountPercentage / 100) * product.price;
        return product.price - discount;
      } else {
        return product.price;
      }
    }
    goToProduct(product: Product) {
      this.router.navigate(['/produit', product.id]);
    }

  
}
