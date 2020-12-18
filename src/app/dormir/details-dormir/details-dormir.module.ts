import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsDormirPageRoutingModule } from './details-dormir-routing.module';

import { DetailsDormirPage } from './details-dormir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsDormirPageRoutingModule
  ],
  declarations: [DetailsDormirPage]
})
export class DetailsDormirPageModule {}
