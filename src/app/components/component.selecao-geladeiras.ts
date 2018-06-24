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
  selProducts = [];
  constructor(private _productsService: ProductsService){}
  ngOnInit(){
    this._productsService.getProducts()
    .subscribe(
      (resProductsData) => {
        this.products = resProductsData.products;
        for(let i =0; i < 4; i++){
          this.selProducts.push(resProductsData.products[i]);
        }
      },
      error => alert(error)
    )
  }
}