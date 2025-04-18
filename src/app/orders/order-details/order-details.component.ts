import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../../services/order-state.service';
import { Order } from '../../../../dev/models/store_types';
import { Observable } from 'rxjs';
import { OrderDetails } from '../../../../dev/backend/query_types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: false,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  orders$ : Observable<OrderDetails[]>  | undefined;
  total: number = 0;
  full_name: string = '';
  address: string = '';
  card: number = 0;

  constructor(private orderState: OrderStateService, private router: Router) {
  
  }

  ngOnInit(): void {
    this.orders$ = this.orderState.orderDetails$;
    this.orders$.subscribe(data => {
      console.log('Order Details Received:', data);
      this.total = 0;
      data.forEach((d) => {
        this.total += d.quantity * d.stars;
      });
    });
  }

  confirmOrder = () => {
    this.orderState.setOrderDetails(this.full_name, this.total);
    this.orderState.completeOrder();    
    this.router.navigate(['/orders/confirmation']);
  }



}
