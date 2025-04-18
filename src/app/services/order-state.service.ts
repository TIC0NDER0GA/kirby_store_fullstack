import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderDetails } from '../../../dev/backend/query_types';





@Injectable({
  providedIn: 'root'
})
export class OrderStateService {

  private orderDetails = new BehaviorSubject<OrderDetails[]>([]);
  orderDetails$ = this.orderDetails.asObservable();
  private full_name: string = '';
  private total: number = 0;

  constructor() { }

  addToOrder = (o: OrderDetails) : void => {
    const orders : OrderDetails[] = this.orderDetails.getValue();
    const order : OrderDetails = {
      user_id: o.user_id,
      order_id:o.order_id,
      product_id: o.product_id,
      name: o.name,
      stars: o.stars,
      path: o.path,
      quantity: o.quantity,
      total_price: o.stars * o.quantity
    }

    if (orders.find( o => o.product_id === order.product_id) !== undefined) {
      orders.forEach((o: OrderDetails)  => {
        if (o.product_id == order.product_id) {
          o.quantity += Number(order.quantity);
          console.log(typeof o.quantity, typeof order.quantity, o.quantity, order.quantity);
        }
      });
    } else {
      orders.unshift(order);
    }
    this.orderDetails.next(orders.filter(o => o.quantity > 0));
    
  }

  updateQty = (order: OrderDetails, qty: number) : void => {
    const orders : OrderDetails[] = this.orderDetails.getValue();
    let num: number = 0;
    let id: number = 0;
    order.quantity = qty;
      orders.forEach((o: OrderDetails, i)  => {
        if (o.product_id == order.product_id) {
          num = order.quantity * order.stars;
          id = i;
        }
      });

      orders[id].total_price = num;
      this.orderDetails.next(orders.filter(o => o.quantity > 0));
  }

  completeOrder = () : void => {
    const orders : OrderDetails[] = [];
    this.orderDetails.next(orders);
  }

  setOrderDetails(full_name: string, total: number): void {
    this.full_name = full_name;
    this.total = total;
  }

  getOrderDetails() : {full_name:string,total:number} {
    return { full_name: this.full_name, total: this.total };
  }

}
