import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCaptacionDatosComponent } from './event-captacion-datos.component';

describe('EventCaptacionDatosComponent', () => {
  let component: EventCaptacionDatosComponent;
  let fixture: ComponentFixture<EventCaptacionDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCaptacionDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCaptacionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
