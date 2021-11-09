import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICar } from '../models'
import { ColorEnum } from '../models/enums/color.enum';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  usercar: ICar[];

  constructor() { }
  getUserCar(userId: string): Observable<ICar[]> {
    let observer: Observable<ICar[]>;
    if (this.usercar === null || this.usercar === undefined) {
      this.usercar = [
        {
          id: 'adasd5s4ds5sd45',
          title: 'پژو 405',
          model: '405',
          company: {
            name: 'پژو',
            logo: './assets/icon/peugeot.svg'
          },
          capacity: 4,
          color: 'نقره ای',
          image: '',
          year: 84,
          features:
            [
              {
                value: 'دارد',
                color: ColorEnum.primary,
                icon: 'musical-notes',
                isMain: true,
              }
            ]
        }
      ]
    }

    observer = of(this.usercar);
    return observer;
  }
}
