import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service.products';

@Component({
  selector: 'selGeladeiras',
  templateUrl: './component.selecao-geladeiras.html',
  styleUrls: ['./component.selecao-geladeiras.scss'],
  providers: [ProductsService]
})

export class selGeladeidasComponent {
  products = [];
  constructor(private _productsService: ProductsService){}
  ngOnInit(){
    this._productsService.getProducts()
    .subscribe(
      (resProductsData) => {
        this.products = resProductsData.products;
      },
      error => alert(error),
      () => console.log(JSON.stringify(this.products));
    )
  }
}