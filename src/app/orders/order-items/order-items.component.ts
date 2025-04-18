import { Component, Input } from '@angular/core';
import { Order } from '../../../../dev/models/store_types';
import { OrderDetails } from '../../../../dev/backend/query_types';
import { OrderStateService } from '../../services/order-state.service';

@Component({
  selector: 'app-order-items',
  standalone: false,
  templateUrl: './order-items.component.html',
  styleUrl: './order-items.component.css'
})
export class OrderItemsComponent {
  name: string = '';
  stars: number = 0;
  path:string = '';
  @Input() order : OrderDetails;
  
  constructor(private orderState: OrderStateService) {
    this.order = {
      order_id : 0,
      user_id : 0,
      product_id : 0,
      quantity : 0,
      stars: 0,
      path: '',
      name: '',
      total_price: 0
    }
  }

  updateQty = (order: OrderDetails) => {
    this.orderState.updateQty(order, order.quantity);
  }

}
