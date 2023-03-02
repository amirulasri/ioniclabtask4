import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcomPage } from './fcom.page';

const routes: Routes = [
  {
    path: '',
    component: FcomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcomPageRoutingModule {}
