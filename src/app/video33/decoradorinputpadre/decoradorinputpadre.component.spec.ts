import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorinputpadreComponent } from './decoradorinputpadre.component';

describe('DecoradorinputpadreComponent', () => {
  let component: DecoradorinputpadreComponent;
  let fixture: ComponentFixture<DecoradorinputpadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorinputpadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorinputpadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
