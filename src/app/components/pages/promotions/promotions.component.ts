import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
  providers: [ProductsService],
})
export class PromotionsComponent {
  isDoctorFirstPict: boolean = true;
  title: string = 'Nos promotions';
}
