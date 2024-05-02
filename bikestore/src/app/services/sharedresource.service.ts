import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class SharedresourceService {

  constructor() { }

  private currentStoreSubject = new BehaviorSubject<Store | null>(null);
  currentStore$ = this.currentStoreSubject.asObservable();

  setCurrentStore(store: Store) {
    this.currentStoreSubject.next(store);
  }

  getCurrentStore(): Store | any{
    this.currentStoreSubject.value;
    console.log('que es estoooo' + this.currentStore$);
  }
}




