import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: StoreListComponent},
  { path: 'store/:id', component: StoreDetailsComponent },
  { path: 'add', component: AddStoreComponent },
  { path: 'products', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
