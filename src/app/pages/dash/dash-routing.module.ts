import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashPage } from './dash.page';

const routes: Routes = [
  {
    path: '',
    component: DashPage,
    children: [
      {
        path: 'user-info',
        loadChildren: () => import('./user-info/user-info.module').then(m => m.UserInfoPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-info',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashPageRoutingModule { }
