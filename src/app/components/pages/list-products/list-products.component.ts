import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers: [ProductsService],
})
export class ListProductsComponent implements OnInit{
  productsList: Product[];

constructor(productsService: ProductsService){
  
}
ngOnInit(): void {
    
}

}
