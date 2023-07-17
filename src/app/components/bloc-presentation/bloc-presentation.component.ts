import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-bloc-presentation',
  templateUrl: './bloc-presentation.component.html',
  styleUrls: ['./bloc-presentation.component.scss'],
  providers: [ProductsService],
})
export class BlocPresentationComponent {

}
