import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadetareasPadreComponent } from './listadetareas-padre.component';

describe('ListadetareasPadreComponent', () => {
  let component: ListadetareasPadreComponent;
  let fixture: ComponentFixture<ListadetareasPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadetareasPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadetareasPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
