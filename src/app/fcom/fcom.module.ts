import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcomPageRoutingModule } from './fcom-routing.module';

import { FcomPage } from './fcom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcomPageRoutingModule
  ],
  declarations: [FcomPage]
})
export class FcomPageModule {}
