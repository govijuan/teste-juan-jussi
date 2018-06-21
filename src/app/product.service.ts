import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = "./app/assets/data/products.json";
  constructor(private http: HttpClient) { }
  getProducts(){
    let jsonData =  this.http.get(this._url);
    return jsonData;
  }
}
