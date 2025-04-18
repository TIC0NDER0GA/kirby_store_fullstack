import { Component, Input } from '@angular/core';
import { Product } from '../../../../dev/models/store_types';
import { ProductService } from '../../services/product.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})


export class ProductDetailsComponent implements OnInit{
product_id: number = 0;
product : Product;
productObserver : Observer<Product> = {
  next: (product: Product) => {
    this.product = product;
  }, 
  error: (err) => {
    console.log('Error loading product details: ', err);
  },
  complete: () => {
    console.log('Getting Product details completed');
  }
}

constructor(private productService: ProductService, private router: ActivatedRoute, 
  private storageService: StorageService) {
  this.product = {
    name: '',
    path: '',
    stars: 0,
    description: ''
  }
}

ngOnInit(): void {
  this.router.paramMap.subscribe(params => {
    const id = +params.get('id')!;
    this.productService.getProduct(id).subscribe(this.productObserver);
  });
}

}
