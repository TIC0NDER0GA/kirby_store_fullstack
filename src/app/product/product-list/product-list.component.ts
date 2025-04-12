import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../dev/models/store_types';
import { Observer } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  
  getProductsObserver : Observer<Product[]> = {
    next: (products : Product[]) => {
      console.log(products);
      this.products = products;
    },
    error: (err) => {
      console.error('Error loading products:', err);
    },
    complete: () => {
      console.log('Product loading completed');
    }
  } 
  

  constructor(private productService: ProductService) {

  }


  ngOnInit() : void  {
    this.productService.getProducts().subscribe(this.getProductsObserver);
  }




}
