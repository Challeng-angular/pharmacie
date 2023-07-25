import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-bloc-title',
  templateUrl: './bloc-title.component.html',
  styleUrls: ['./bloc-title.component.scss'],
  providers: [ProductsService],
})
export class BlocTitleComponent {
  @Input() title: string;
  @Input() isDisplayFirstPict: boolean = false;
}
