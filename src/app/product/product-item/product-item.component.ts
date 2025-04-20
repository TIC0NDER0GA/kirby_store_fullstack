import { Component, Input } from '@angular/core';
import { Product } from '../../../../dev/models/store_types';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product : Product;
  
  constructor() {
    this.product = {
      name: '',
      path: '',
      stars: 0,
      description: ''
    }
  }

  showNotification = (message: string) => {
    alert(message);
  }
}


