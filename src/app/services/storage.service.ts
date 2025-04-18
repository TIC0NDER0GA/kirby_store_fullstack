import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  set = (key: string, value: string | number) : void => {
    if (typeof window !== 'undefined' && localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get = (key: string) : string | number | null => {
    let item;
    if (typeof window !== 'undefined' && localStorage) {
    item = localStorage.getItem(key);
    }
    return item ? JSON.parse(item) : null;
  }

  remove = (key: string) : void => {
    if (typeof window !== 'undefined' && localStorage) {
    localStorage.removeItem(key);
    }
  }

  clear = () : void => {
    if (typeof window !== 'undefined' && localStorage) {
    localStorage.clear();
    }
  }
  
}
