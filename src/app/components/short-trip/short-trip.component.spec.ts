import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortTripComponent } from './short-trip.component';

describe('ShortTripComponent', () => {
  let component: ShortTripComponent;
  let fixture: ComponentFixture<ShortTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTripComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
