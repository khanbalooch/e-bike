import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    // children: [
    //   {
    //     path: 'main',
    //     redirectTo: '/main',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  // {
  //   path: '',
  //   redirectTo: '/main',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
