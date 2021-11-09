import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-trip',
  templateUrl: './short-trip.component.html',
  styleUrls: ['./short-trip.component.scss'],
})
export class ShortTripComponent implements OnInit {

  @Input() item: { origin: string; destination: string; start: string; end: string; tripdays: string[] } = {
    origin: 'تهران پارس',
    destination: 'میدان ونک',
    start: '08:00',
    end: '08:45',
    tripdays: []
  };
  constructor() { }

  ngOnInit() { }

}
