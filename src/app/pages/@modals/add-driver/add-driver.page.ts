import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.page.html',
  styleUrls: ['./add-driver.page.scss'],
})
export class AddDriverPage implements OnInit {

  @Input() title = 'افزودن مسیر جدید'
  constructor(
    public locationProvider: LocationService,
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss();
  }

}
