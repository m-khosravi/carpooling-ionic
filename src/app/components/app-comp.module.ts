
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ShortTripComponent } from './short-trip/short-trip.component';
import { CarCardComponent } from './car-card/car-card.component';

const components = [
    CardComponent,
    HeaderMenuComponent,
    ShortTripComponent,
    CarCardComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: components,
})
export class AppCompModule { }
