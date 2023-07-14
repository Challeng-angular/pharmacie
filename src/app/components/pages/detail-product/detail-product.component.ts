import { Component } from '@angular/core';
import { Product } from 'src/app/mock-product/product';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
  product: Product;

}
