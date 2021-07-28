import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./../maps/maps.module').then(m => m.MapsPageModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
