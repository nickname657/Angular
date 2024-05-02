import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreService } from '../../services/store.service';
import { SharedresourceService } from '../../services/sharedresource.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  stores?: Store[];
  currentStore: Store = {};
  currentIndex = -1;
  name = '';

  constructor(
    private storeService: StoreService,
    private sharedService: SharedresourceService
  ) { }

  ngOnInit(): void {
    this.retrieveStores();
  }

  retrieveStores(): void {
    this.storeService.getAll().subscribe({
      next: (data) => {
        this.stores = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveStores();
    this.currentStore = {};
    this.currentIndex = -1;
  }

  setActiveStore(store: Store, index: number): void {
    this.currentStore = store;
    this.sharedService.setCurrentStore(store);
    this.currentIndex = index;
  }

  removeAllStores(): void {
    this.storeService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void {
    this.currentStore = {};
    this.currentIndex = -1;

    this.storeService.findByName(this.name).subscribe({
      next: (data) => {
        this.stores = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
