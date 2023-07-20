import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: any[] = [
    { text: 'Accueil', link: 'accueil', icon: 'home' },
    { text: 'Produits', link: 'produits', icon: 'view_list' },
    { text: 'Promos', link: 'promotions', icon: 'discount' },
    { text: 'Services', link: 'services', icon: 'medical_services' },
    { text: 'À propos', link: 'apropos', icon: 'info' },
    { text: 'Contact', link: 'contact', icon: 'mail' },
    { text: '', link: 'overview-order', icon: 'shopping_cart' },
  ];
  private breakpointSubscription: Subscription;
  public isSmallScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private translate: TranslateService

  ) {  translate.setDefaultLang('fr'); 
} 

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  redirectToHomepage() {
    this.router.navigate(['/accueil']);
  }

 changeLanguageEn():void{
  this.translate.use('en');
}

changeLanguageDe():void{
  this.translate.use('de');
}
changeLanguageFr():void{
  this.translate.use('fr');
}
}




