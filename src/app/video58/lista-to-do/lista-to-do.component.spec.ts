import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaToDoComponent } from './lista-to-do.component';

describe('ListaToDoComponent', () => {
  let component: ListaToDoComponent;
  let fixture: ComponentFixture<ListaToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
