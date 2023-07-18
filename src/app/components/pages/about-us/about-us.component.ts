import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ProductsService]
})
export class AboutUsComponent {
  titleList: string[] = [
    'A propos',
  ];
  isDoctorFirstPict: boolean = true;
}
