import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs';



@Injectable()

export class ProductsService {
  private _url: string = '/assets/data/products.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }
}