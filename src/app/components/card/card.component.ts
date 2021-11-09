import { Component, OnInit, Input } from '@angular/core';
import { HamroViewModel } from 'src/app/models/hamro-view-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input("item") item: HamroViewModel;
  constructor() { }

  ngOnInit() { }

}
