import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  menuPages = [
    {
      title: 'مشخصات کاربری',
      url: '/dash/user-info',
      icon: 'person',
      subMenu:[]
    },
    // {
    //   title: 'کیف پول',
    //   url: '/dashboard/home/wallet',
    //   icon: 'wallet',
    //   subMenu:[]
    // },
    {
      title: 'گزارشات',
      url: '/dashboard/home/reports',
      icon: 'stats-chart',
      subMenu:[]
    },
    {
      title: 'خدمات',
      url: '/dashboard/home/services',
      icon: 'apps',
      subMenu:[]
    },
    {
      title: 'درباره ما',
      url: '/dashboard/about-us',
      icon: 'help',
      subMenu:[]
    },
    {
      title: 'سوالات متداول',
      url: '/dashboard/faq',
      icon: 'help-circle',
      subMenu:[]
    },
    {
      title: 'پیشنهادات و انتقادات',
      url: '/dashboard/feedback',
      icon: 'chatbox-ellipses',
      subMenu:[]
    },
  ];
  appVersion = '0.0.1-beta'
  constructor() { }

  ngOnInit() {
  }

}
