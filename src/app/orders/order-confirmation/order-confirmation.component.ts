import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../../services/order-state.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit {

  full_name: string = '';
  total: number = 0;
  tuple: {full_name:string,total:number} = {full_name:'',total:0};
  constructor(private orderState: OrderStateService, private router: Router) {

  }


  ngOnInit(): void {
  this.router.navigate(['/orders/confirmation']);
  this.tuple = this.orderState.getOrderDetails();

  if (this.tuple.full_name === '' || this.tuple.total === 0) {
    this.router.navigate(['/products']);
  }

  this.full_name = this.tuple.full_name;
  this.total = this.tuple.total;
  }

}
