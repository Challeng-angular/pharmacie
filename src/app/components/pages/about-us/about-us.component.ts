import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TranslateGlobalService } from 'src/app/services/translate-global.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ProductsService, TranslateGlobalService]
})
export class AboutUsComponent {
  titleList: string[] = [
    'A propos',
  ];
  isDoctorFirstPict: boolean = true;
}
