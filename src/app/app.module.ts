import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppComponent } from './app.component';
import { topBarComponent } from './components/component.navbar-top'
import { homeTopBannerComponent } from './components/component.home-top-banner';
import { selGeladeidasComponent } from './components/component.selecao-geladeiras'

@NgModule({
  declarations: [
    AppComponent, topBarComponent, homeTopBannerComponent, selGeladeidasComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
