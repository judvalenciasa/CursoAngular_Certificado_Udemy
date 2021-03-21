import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmouseComponent } from './eventmouse.component';

describe('EventmouseComponent', () => {
  let component: EventmouseComponent;
  let fixture: ComponentFixture<EventmouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
