import { Component, ViewChild } from '@angular/core';
import { IonContent, AnimationController } from '@ionic/angular';
import { HamroViewModel } from '../models/hamro-view-model';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
  ]
})
export class HomePage {
  hamros: HamroViewModel[] = [
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
    },
  ]
  constructor() {
  }
  segmentChanged(ev) {

  }
  scrollTo(selector: string) {
    let el = document.getElementById(selector);
    document.querySelector('ion-content').scrollToPoint(el.offsetLeft, el.offsetTop - 50, 500);
  }
}

