import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'category/all',
        pathMatch: 'full',
      },
      {
        path: 'category/:categoryname',
        component: CategoryComponent,
      },
      {
        path: 'details/:id',
        component: ShowdetailsComponent,
      },
    ],
  },
];
