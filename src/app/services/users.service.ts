import { Injectable } from '@angular/core';
import { Observable, observable, of, from } from 'rxjs';
import { UserInfo, IUserInfo } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: IUserInfo;
  constructor() { }
/**
 * Get user information
 *
 * @returns {Observable<IUserInfo>}
 * @memberof UsersService
 */
getUserInfo(): Observable<IUserInfo> {

    if (this.user === null || this.user === undefined) {
      this.user = {
        id: 'fhkkyu-dcjjktjh-sikthj56k',
        firstname: 'مهدی',
        lastname: 'خسروی',
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
        فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
        طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود
        در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
        سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
        profileImage: './assets/img/pr.jpg',
        birthday: new Date('1992/02/23'),
        registerDate: new Date('2020/01/26'),
        level: {
          title: 'تازه وارد',
          color: 'primary',
          point: 60,
          pointMax: 100,
          icon: '',
        },
        stats: {
          followers: 56,
          followings: 72,
          roads: 16,
        }
      }
    }

    let observable: Observable<IUserInfo>;
    observable = of(this.user);

    return observable;
  }
}
