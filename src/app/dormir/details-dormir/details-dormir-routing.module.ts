import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDormirPage } from './details-dormir.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDormirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDormirPageRoutingModule {}
