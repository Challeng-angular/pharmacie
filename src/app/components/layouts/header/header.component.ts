import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


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
  translatedMenuItems: any[];
  disableSelect = new FormControl(false);
  private breakpointSubscription: Subscription;
  public isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,
  private translate: TranslateService) { }

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        this.translateMenuItems();
      });
     
    
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
  translateMenuItems() {
    this.menuHeaderItems = this.menuHeaderItems.map(item => {
      return { label: this.translate.instant(item.label) };
    });
  }
  
}
