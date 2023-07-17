import {Injectable} from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products-list'

@Injectable()
export class ProductsService{
  productsList: Product[];
  product: Product;


  getProductsList(): Product[]{
    return PRODUCTS
  }

  getProductById(id: number): Product | undefined{
    return this.productsList.find(product => product.id === id);
  }




}

