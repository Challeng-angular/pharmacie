import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './component/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CardDirective } from './directives/card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
