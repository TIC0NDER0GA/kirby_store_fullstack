import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit {
  
  
  constructor(private store: StorageService) {

  }
  
  
  ngOnInit(): void {
    if ( this.store.get('user_id') === null) {
      this.store.set('user_id',1);
    }
  }

  
}
