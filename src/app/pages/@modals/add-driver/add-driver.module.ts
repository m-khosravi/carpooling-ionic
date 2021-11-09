import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDriverPageRoutingModule } from './add-driver-routing.module';

import { AddDriverPage } from './add-driver.page';
import { AutoCompleteModule } from 'ionic4-auto-complete'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDriverPageRoutingModule,
    AutoCompleteModule 
  ],
  declarations: [AddDriverPage]
})
export class AddDriverPageModule {}
