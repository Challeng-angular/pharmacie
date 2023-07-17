import { Component } from '@angular/core';
import { Product } from 'src/app/mock-product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers: [ProductsService],
})
export class ListProductsComponent {
  productsList: Product[];
  isDoctorFirstPict: boolean = true;
  titleList: string[] = [
    'Compléments alimentaires',
    'Spécialités en vente libre',
    'Cosmétiques & Maquillages',
    'Phytothérapie & Homéopathie',
    'Spagyrie',
  ];
}
