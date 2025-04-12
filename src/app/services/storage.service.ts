import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  set = (key: string, value: string | number) : void => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get = (key: string) : string | number | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  remove = (key: string) : void => {
    localStorage.removeItem(key);
  }

  clear = () : void => {
    localStorage.clear();
  }
  
}
