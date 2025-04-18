import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'Kirby_Online_Store';

  constructor(private storageService: StorageService) {

  }


  ngOnInit(): void {
    this.storageService.set('user_id',1);
  }

  

}
