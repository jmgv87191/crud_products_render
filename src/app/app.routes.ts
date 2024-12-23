import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductListComponent
    },
    {
        path:'add',
        loadComponent: ()=> import('./components/add-product/add-product.component').then( m => m.AddProductComponent )
    },
    {
        path:'edit/:id',
        loadComponent: ()=> import('./components/add-product/add-product.component').then( m => m.AddProductComponent )

    }

];
