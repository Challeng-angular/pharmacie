import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuHeaderItems: any[] = [
    { label: 'Compléments alimentaires', fragment: 'section-1' },
    { label: 'Spécialités en vente libre', fragment: 'section-2' },
    { label: 'Cosmétiques & Maquillages', fragment: 'section-3' },
    { label: 'Phytothérapie / Homéopathie', fragment: 'section-4' },
    { label: 'Spagyrie', fragment: 'section-5' },
  ];

  disableSelect = new FormControl(false);
  private breakpointSubscription: Subscription;
  public isSmallScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

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

  handleClick(frag: string) {
    console.log(frag);
    this.router.navigateByUrl('produits#' + frag);
  }
}
