import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorinputComponent } from './decoradorinput.component';

describe('DecoradorinputComponent', () => {
  let component: DecoradorinputComponent;
  let fixture: ComponentFixture<DecoradorinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
