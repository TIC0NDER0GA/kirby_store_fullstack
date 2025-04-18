import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../dev/models/store_types';
import { HttpClient } from '@angular/common/http';
import { ProductQueryRequest } from '../../../dev/backend/query_types';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  query: ProductQueryRequest = {
    query : '',
    token : '',
    filters  : {
        id: 0,
        name: '',
        price: 0,
        category: '',
    }
}

  constructor(private http: HttpClient) { }


  getProduct = (id : number) : Observable<Product> => {
    this.query = {
      query : '',
      token : '',
      filters  : {
          id: id,
          name: '',
          price: 0,
          category: '',
      }
    }

    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  getProducts = () : Observable<Product[]> => {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }


}