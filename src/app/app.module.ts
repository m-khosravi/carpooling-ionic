import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { NgxNeshanModule, NESHAN_API_KEY } from "ngx-neshan";
import { AppCompModule } from './components/app-comp.module';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxNeshanModule,
    AppCompModule,
    BarRatingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: NESHAN_API_KEY, useValue: 'service.oMk7yFK2vf1WpmZjimlAsUpGi140jbZIYjQwYAzu' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
