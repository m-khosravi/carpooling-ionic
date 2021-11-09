import { Component, OnInit } from '@angular/core';
import { HamroViewModel } from 'src/app/models/hamro-view-model';
import { IUserInfo } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { CarsService } from 'src/app/services/cars.service';
import { ICar } from 'src/app/models';
import { ModalController } from '@ionic/angular';
import { AddDriverPage } from '../../@modals/add-driver/add-driver.page';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  user: IUserInfo;
  cars: ICar[];
  hamros = [
    {
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
      start: '08:00',
      end: '08:45',
      tripdays: ['ش', 'ی', 'س'],
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
        }]
      ]
    },
    {
      title: "مهدی خسروی",
      level: {
        color: 'warning',
        icon: '',
        value: 'حرفه‌ای'
      }, gender: 1,
      count: 3,
      description: "محل کار من ونک هست و این مسیر رو هر روز میرم",
      destination: "ونک",
      start: '10:00',
      end: '11:45',
      tripdays: ['ش', 'ی', 'پ', 'ج'],
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
          icon: '',
          color: 'success',
          value: 'سیگار آزاد',
        }]
      ]
    },
    {
      title: "مهدی خسروی",
      level: {
        color: 'success',
        icon: '',
        value: 'تایید شده'
      }
      , gender: 1,
      count: 3,
      description: "محل کار من ونک هست و این مسیر رو هر روز میرم",
      destination: "ونک",
      start: '14:20',
      end: '16:45',
      tripdays: ['ش', 'ی', 'پ', 'ج'],
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
        }]
      ]
    },
    {
      title: "مهدی خسروی",
      level: {
        color: 'success',
        icon: '',
        value: 'تایید شده'
      },
      gender: 1,
      count: 3,
      description: "محل کار من ونک هست و این مسیر رو هر روز میرم",
      destination: "ونک",
      start: '10:00',
      end: '11:45',
      tripdays: ['ش', 'ی', 'پ', 'ج'],
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
        }]
      ]
    },
  ]
  constructor(
    private users: UsersService,
    private carservice: CarsService,
    private modal: ModalController
  ) {
    users.getUserInfo().subscribe(res => {
      this.user = res;
    });
    carservice.getUserCar('').subscribe(res => {
      this.cars = res;
    })
  }

  ngOnInit() {
  }

  async addDrive() {
    let mod = await this.modal.create({
      component: AddDriverPage,
      animated: true,
      keyboardClose: true,
      showBackdrop: true,
    });
    mod.present();
  }

}
