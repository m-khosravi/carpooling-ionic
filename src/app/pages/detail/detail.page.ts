import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NsLocation, NeshanService, NsSearchItem } from 'ngx-neshan';
import { LocationService } from 'src/app/services/location.service';
import { ModalController } from '@ionic/angular';
import { AddDriverPage } from '../@modals/add-driver/add-driver.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  location: NsLocation = new NsLocation();

  item = {
    title: "مهدی خسروی",
    level: {
      color: 'primary',
      icon: '',
      value: 'تازه وارد'
    },
    gender: 1,
    count: 3,
    description: "محل کار من ونک هست و این مسیر رو هر روز میرم",
    destination: "ونک",
    goTime: new Date(),
    icon: "person-circle",
    img: "",
    origin: "تهرانپاس",
    returnTime: new Date(),
    features: [
      [{
        icon: 'car',
        value: 'پراید 111',
        color: 'primary',
      },
      {
        icon: 'people',
        value: '3 نفر خالی',
        color: 'primary',
      }
      ],
      [{
        icon: 'cash',
        value: '~ 2,500 تومان',
        color: 'primary',
      }],
      [{
        icon: 'musical-notes',
        value: 'دارد',
        color: 'primary',
      },
      {
        icon: 'logo-no-smoking',
        value: 'سیگار ممنوع',
        color: 'danger',
      }]
    ]
  };

  subtitle: string = '';
  title: string = '';
  selected: NsSearchItem[] = [];
  constructor(
    public locationProvider: LocationService, 
    private neshan: NeshanService,
    private modal: ModalController,
    ) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        var loc = new NsLocation();

        loc.latitude = res.coords.latitude;
        loc.longitude = res.coords.longitude;
        this.location = loc;

        this.neshan.reverseGeocoding(loc).subscribe(res => {
          this.subtitle = res.state + ' - ' + res.city;
          this.title = res.route_name;
        });
      }, err => {
        console.log(err);
        this.neshan.reverseGeocoding(this.location).subscribe(res => {
          this.subtitle = res.state + ' - ' + res.city;
          this.title = res.route_name;
        });
      });
    }
  }
  ngOnInit() {
  }
  async onClick() {
    let mod = await this.modal.create({
      component: AddDriverPage,
      swipeToClose: true,
      animated: true,
      backdropDismiss: true,
    });
    await mod.present();
  }
}
