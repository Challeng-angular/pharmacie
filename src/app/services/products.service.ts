import {Injectable} from '@angular/core';
import { Product } from '../mock-product/product';
import { PRODUCTS } from '../mock-product/mock-products-list'

@Injectable()
export class ProductsService{


  getProductsList(): Product[]{
    return PRODUCTS
  }

  getProduct(id: number): Product | null{
    let products = this.getProductsList();

    for (let index = 0; index < products.length; index++){
      if (id === products[index].id) {
        return products[index];
      }}

    return null;
  }

}

