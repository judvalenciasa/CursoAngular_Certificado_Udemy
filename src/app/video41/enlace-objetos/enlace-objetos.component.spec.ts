import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceObjetosComponent } from './enlace-objetos.component';

describe('EnlaceObjetosComponent', () => {
  let component: EnlaceObjetosComponent;
  let fixture: ComponentFixture<EnlaceObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlaceObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
