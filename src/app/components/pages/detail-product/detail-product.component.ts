import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
  providers: [ProductsService],
})
export class DetailProductComponent {
  product: Product;
  titleList: string[] = ['Détails du produit'];
  isDoctorFirstPict: boolean = true;
  productsList: Product[];
  discountedPrices: number[];

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
}
