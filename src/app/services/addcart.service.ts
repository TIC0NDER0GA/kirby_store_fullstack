import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderQueryRequest } from '../../../dev/backend/query_types';
import { Observable } from 'rxjs';
import { Order } from '../../../dev/models/store_types';



@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  constructor(private http: HttpClient) { }

  ADDRESS: string = 'http://localhost:3000/';
  
  
  
  addToOrder = (user_id: number, product_id: number, order_id: number, newQty: number, oldQty: number) : Observable<Order> => {

    const query : OrderQueryRequest = {
      query : '',
    token : '',
    filters  : {
        id: 0,
        name: '',
        stars: 0,
        description: '',
        quantity: newQty + oldQty,
        user_id: user_id,
        product_id: product_id,
        order_id: order_id
    }
  }




    if (oldQty < 1) {
      return this.http.post<Order>(`${this.ADDRESS}orders/:id/products`, query);
    } else {
      return this.http.patch<Order>(`${this.ADDRESS}orders/:id/products`, query);

    }

  }

  createOrder = (user_id: number, order_status: string) : Observable<Order> => {
    const query : OrderQueryRequest = {
      query : '',
    token : '',
    filters  : {
        id: 0,
        name: '',
        stars: 0,
        description: order_status,
        quantity: 0,
        user_id: user_id,
        product_id: 0,
        order_id: 0
    }
  }

  return this.http.post<Order>(`${this.ADDRESS}orders`, query);

}

deleteOrder = (order_id: number, order_status: string) : Observable<Order[]> => {
  const query : OrderQueryRequest = {
    query : '',
  token : '',
  filters  : {
      id: 0,
      name: '',
      stars: 0,
      description: order_status,
      quantity: 0,
      user_id: 0,
      product_id: 0,
      order_id: order_id
  }
}

return this.http.delete<Order[]>(`${this.ADDRESS}orders`,
  {body : query}
);

}


completeOrder = (order_id: number, order_status: string) : Observable<Order[]> => {
  const query : OrderQueryRequest = {
    query : '',
  token : '',
  filters  : {
      id: 0,
      name: '',
      stars: 0,
      description: order_status,
      quantity: 0,
      user_id: 0,
      product_id: 0,
      order_id: order_id
  }
}

return this.http.patch<Order[]>(`${this.ADDRESS}orders`,
  {body : query}
);

}

}
