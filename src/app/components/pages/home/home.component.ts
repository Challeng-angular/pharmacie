import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductsService],
})
export class HomeComponent {
  titleList: string[] = [
    'Santé et bien-être à portée de clic',
    'Les meilleurs offres du moment',
    'Nos meilleurs ventes',
    'Détails du produit'
  ];
  isDoctorFirstPict: boolean = true;
}
