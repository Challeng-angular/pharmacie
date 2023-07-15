import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuHeaderItems: any[] = [
    { label: 'Compléments alimentaires' },
    { label: 'Spécialités en vente libre' },
    { label: 'Cosmétiques & Maquillages' },
    { label: 'Phytothérapie / Homéopathie' },
    { label: 'Spagyrie' },
  ];

  disableSelect = new FormControl(false);
  private breakpointSubscription: Subscription;
  public isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

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
}
