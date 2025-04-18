import { Component, Input, OnInit } from '@angular/core';
import { AddcartService } from '../services/addcart.service';
import { Observer } from 'rxjs';
import { Order, Product } from '../../../dev/models/store_types';
import { StorageService } from '../services/storage.service';
import { OrderStateService } from '../services/order-state.service';
import { OrderDetails } from '../../../dev/backend/query_types';

@Component({
  selector: 'app-order-cart',
  standalone: false,
  templateUrl: './order-cart.component.html',
  styleUrl: './order-cart.component.css',
})
export class OrderCartComponent implements OnInit {
  @Input() product : Product;
selectedQty : number = 0;
quantities : number[] = []; 
order : OrderDetails = {
  order_id: 0,
  user_id: 0,
  product_id: 0,
  quantity: 0,
  stars: 0,
  path: '',
  name: '',
  total_price: 0
};




showOrderObserver: Observer<Order> = {
  next: (order: Order) => {
    console.log(order);
    if (this.store.get('order_id') === null) {
      this.store.set('order_id', (order.id as unknown) as number);
    }
  }, 
  error: (err) => {
    console.log('Error loading products: ', err);
  },
  complete: () => {
    console.log('Adding to Cart completed');
  }
}

constructor(private addcart: AddcartService, private store: StorageService, private orderState: OrderStateService) {
  this.quantities = this.makeArray(10);
  this.product = {
    id : 0,
    name : '',
    path : '',
    stars : 0,
    description : ''
}
}
  ngOnInit(): void {
  }


makeArray = (n: number) : number[] => {
  const arr : number[] = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}


submitQty = () : void => {

  try { 

    const user_id : number  = (this.store.get('user_id') as unknown) as number;

    if (this.store.get('order_id') === null) {
      this.addcart.createOrder(user_id, 'active').subscribe(this.showOrderObserver);
    }

    const order_id : number = (this.store.get('order_id') as unknown) as number;

    this.order.order_id = order_id;
    this.order.user_id = user_id;
    this.order.quantity = this.selectedQty;
    this.order.product_id = this.product.id as number;
    this.order.name = this.product.name;
    this.order.path = this.product.path;
    this.order.stars = this.product.stars;
    this.orderState.addToOrder(this.order);

    /*
    this.addcart.addToOrder(
      user_id,
      (this.productId as unknown) as number,
      order_id,
      this.selectedQty,
      0).subscribe(this.showOrderObserver);
      alert(`${this.selectedQty} was submitted`);
    */
    
  } catch (err) {
    console.error('Error: ', err);
  }
}


}
