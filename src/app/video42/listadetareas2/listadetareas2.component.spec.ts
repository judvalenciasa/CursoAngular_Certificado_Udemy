import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listadetareas2Component } from './listadetareas2.component';

describe('Listadetareas2Component', () => {
  let component: Listadetareas2Component;
  let fixture: ComponentFixture<Listadetareas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listadetareas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listadetareas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
