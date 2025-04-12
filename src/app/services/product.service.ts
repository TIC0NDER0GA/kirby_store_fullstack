import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../dev/models/store_types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient) { }


  getProduct = (id : number) : Observable<Product> => {
    return this.http.get<Product>(`http://localhost:3000/products/id=${1}`);
  }

  getProducts = () : Observable<Product[]> => {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }


}