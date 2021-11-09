import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserInfoPageRoutingModule } from './user-info-routing.module';

import { UserInfoPage } from './user-info.page';
import { AppCompModule } from 'src/app/components/app-comp.module';
import { BarRatingModule } from 'ngx-bar-rating'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInfoPageRoutingModule,
    AppCompModule,
    BarRatingModule
  ],
  declarations: [UserInfoPage]
})
export class UserInfoPageModule {}
