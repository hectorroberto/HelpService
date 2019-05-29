import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreasPage } from './areas.page';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AreasPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AreasPage]
})
export class AreasPageModule {}
