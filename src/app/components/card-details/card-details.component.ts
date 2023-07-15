import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  product: Product | any;
  productsList: Product[];
  discountedPrices: number[];

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.params["id"];
    this.product = this.productsService.getProductById(id);

  }
  calculateDiscountedPrice(product: Product): number {
    if (product.isDiscount && product.discountPercentage) {
      const discount = (product.discountPercentage / 100) * product.price;
      return product.price - discount;
    } else {
      return product.price;
    }
  }
    goToProductsList(): void {
      this.router.navigate(['/products']);
  }
  
  }

