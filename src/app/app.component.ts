import { Component } from '@angular/core';

import { topBarComponent } from './components/component.navbar-top';
import { homeTopBannerComponent } from './components/component.home-top-banner';
import { selGeladeidasComponent } from './components/component.selecao-geladeiras';
import { ProductsService  } from './service.products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent {
  
}
