import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
