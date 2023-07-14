import {Injectable} from '@angular/core';
import { Product } from '../mock-product/product';
import { PRODUCTS } from '../mock-product/mock-products-list'

@Injectable()
export class ProductsService{
  productsList: Product[];

  getProductsList(): Product[]{
    return PRODUCTS
  }


}

