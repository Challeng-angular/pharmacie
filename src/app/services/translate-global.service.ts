import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


@Injectable()
export class TranslateGlobalService {


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr'); 
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
