import { Component,Input,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Store } from '../../models/store.model';
import { StoreService } from '../../services/store.service';
import { SharedresourceService } from '../../services/sharedresource.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  products?: Product[];
  currentProduct: Product = {};
  currentStore: Store = {};
  currentIndex = -1;
  name = '';


  /* otra opcion :::::::: currentStore: Store | null; */

  

  constructor(
    private productService: ProductService,
    private storeService: StoreService,
    private sharedStore: SharedresourceService
  ) {}

  ngOnInit(): void {
    this.retrieveProducts(this.currentStore.id);
    this.currentStore = this.sharedStore.getCurrentStore();
  }

  

  getStore(id: string): void {
    this.storeService.get(id).subscribe({
      next: (data) => {
        this.currentStore = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  retrieveProducts(id: string): void {
    console.log("retriebe " + id);
    this.productService.getAll(id).subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

 /*  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  } */

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  /* removeAllProducts(): void {
    this.productService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  } */

  searchName(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.findByName(this.name).subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
