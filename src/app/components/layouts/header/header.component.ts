import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
  translatedMenuItems: any[];
  disableSelect = new FormControl(false);
  private breakpointSubscription: Subscription;
  public isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit():void {
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
    this.router.navigateByUrl('produits#' + frag);
  }
}
