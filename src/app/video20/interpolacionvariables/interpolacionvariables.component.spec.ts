import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionvariablesComponent } from './interpolacionvariables.component';

describe('InterpolacionvariablesComponent', () => {
  let component: InterpolacionvariablesComponent;
  let fixture: ComponentFixture<InterpolacionvariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolacionvariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacionvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
