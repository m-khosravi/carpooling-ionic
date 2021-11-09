import { Component, OnInit, Input } from '@angular/core';
import { HamroViewModel } from 'src/app/models/hamro-view-model';
import { ICar } from 'src/app/models';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {

  @Input() car: ICar;
  constructor() { }

  ngOnInit() {}

}
