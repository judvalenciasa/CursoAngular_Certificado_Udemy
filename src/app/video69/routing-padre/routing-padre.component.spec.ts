import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPadreComponent } from './routing-padre.component';

describe('RoutingPadreComponent', () => {
  let component: RoutingPadreComponent;
  let fixture: ComponentFixture<RoutingPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
