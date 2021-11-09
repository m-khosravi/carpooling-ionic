import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { AppCompModule } from 'src/app/components/app-comp.module';
import { NgxNeshanModule } from 'ngx-neshan';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { AddDriverPageModule } from '../@modals/add-driver/add-driver.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    AppCompModule,
    NgxNeshanModule,
    AutoCompleteModule,
    AddDriverPageModule,
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
