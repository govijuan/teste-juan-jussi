import { LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { topBarComponent } from './components/component.navbar-top'
import { homeTopBannerComponent } from './components/component.home-top-banner';
import { selGeladeidasComponent } from './components/component.selecao-geladeiras';
import { registerLocaleData } from '@angular/common';
import {  DivideInPipe } from './installments.pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent, topBarComponent, homeTopBannerComponent, selGeladeidasComponent, DivideInPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [DivideInPipe, { provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
