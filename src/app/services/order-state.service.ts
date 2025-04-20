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

  addToOrder = (o: OrderDetails): void => {
    const orders: OrderDetails[] = this.orderDetails.getValue();
  
    const incomingQty = Number(o.quantity); // coerce to number
    const existingOrder = orders.find(item => item.product_id === o.product_id);
  
    if (existingOrder) {
      existingOrder.quantity += incomingQty;
      existingOrder.total_price = existingOrder.stars * existingOrder.quantity;
    } else {
      const newOrder: OrderDetails = {
        ...o,
        quantity: incomingQty,
        total_price: incomingQty * o.stars
      };
      orders.unshift(newOrder);
    }
  
    // Filter out any with 0 qty (just in case)
    this.orderDetails.next(orders.filter(item => item.quantity > 0));
  }

  updateQty = (order: OrderDetails, qty: number) : void => {
    order.quantity = Number(order.quantity);
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
