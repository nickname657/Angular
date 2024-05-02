import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Store } from '../../models/store.model';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css'
})
export class StoreDetailsComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentStore: Store = {
    city: '',
    name: '',
    phone: '',    
    published: false
  };

  message = '';

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getStore(this.route.snapshot.params['id']);
    }
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

  updatePublished(status: boolean): void {
    const data = {
      city: this.currentStore.city,
      name: this.currentStore.name,
      phone: this.currentStore.phone,
      published: status
    };

    this.message = '';

    this.storeService.update(this.currentStore.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentStore.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateStore(): void {
    this.message = '';

    this.storeService
      .update(this.currentStore.id, this.currentStore)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This store was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteStore(): void {
    this.storeService.delete(this.currentStore.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/stores']);
      },
      error: (e) => console.error(e)
    });
  }

  

}
