import { Component } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrl: './add-store.component.css'
})
export class AddStoreComponent {

  Store: Store = {
    id: '',
    city: '',
    name: '',
    phone: '',
    published: false
  };
  submitted = false;

  constructor(private storeService: StoreService) { }

  saveStore(): void {
    const data = {
      city: this.Store.city,
      name: this.Store.name,
      phone: this.Store.phone,
    };

    this.storeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newStore(): void {
    this.submitted = false;
    this.Store = {
      city: '',
      name: '',
      phone: '',
    };
  }

}
