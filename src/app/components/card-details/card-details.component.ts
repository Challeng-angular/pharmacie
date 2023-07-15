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
  discountedPrice: number;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void{
    // let id : number | undefined;
    // id = !id ? 0 : id;
    // if(id === undefined){
      // id = 2;
    // } else {
// 
    //  id = +this.route.snapshot.params["id"];
    // }
    // this.product = this.productsService.getProductById(id);
    // this.product = this.productsService.getProductById(2);

    if (this.product.isDiscount && this.product.discountPercentage) {
      const discount = (this.product.discountPercentage / 100) * this.product.price;
      this.discountedPrice = this.product.price - discount;
    } else {
      this.discountedPrice = this.product.price;
    }
  }

  goToProductsList(): void {
    this.router.navigate(['/products']);
  }
}

