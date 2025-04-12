import { Component, Input } from '@angular/core';
import { AddcartService } from '../services/addcart.service';
import { Observer } from 'rxjs';
import { Order } from '../../../dev/models/store_types';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-order-cart',
  standalone: false,
  templateUrl: './order-cart.component.html',
  styleUrl: './order-cart.component.css'
})
export class OrderCartComponent {
  @Input() productId?: number;  
selectedQty : number = 0;
quantities : number[] = []; 
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

constructor(private addcart: AddcartService, private store: StorageService) {
  this.quantities = this.makeArray(10);
}


makeArray = (n: number) : number[] => {
  const arr : number[] = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}

submitQty = () : void => {
  const user_id : number  = (this.store.get('user_id') as unknown) as number;

  if (this.store.get('order_id') === null) {
    this.addcart.createOrder(user_id, 'active').subscribe(this.showOrderObserver);
  }

  const order_id : number = (this.store.get('order_id') as unknown) as number;
  
  this.addcart.addToOrder(
    user_id,
    (this.productId as unknown) as number,
    order_id,
    this.selectedQty,
    0).subscribe(this.showOrderObserver);
}

}
