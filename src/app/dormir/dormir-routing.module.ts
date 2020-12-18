import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DormirPage } from './dormir.page';

const routes: Routes = [
  {
    path: '',
    component: DormirPage
  },
  {
    path: 'details-dormir',
    loadChildren: () => import('./details-dormir/details-dormir.module').then( m => m.DetailsDormirPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DormirPageRoutingModule {}
