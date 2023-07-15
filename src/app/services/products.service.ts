import {Injectable} from '@angular/core';
import { Product } from '../mock-product/product';
import { PRODUCTS } from '../mock-product/mock-products-list'

@Injectable()
export class ProductsService{
  productsList: Product[] = PRODUCTS;

  getProductsList(): Product[]{
    return PRODUCTS
  }
  getProductById(id: number): Product | undefined{
    return this.productsList.find(product => product.id === id);
  }

}

