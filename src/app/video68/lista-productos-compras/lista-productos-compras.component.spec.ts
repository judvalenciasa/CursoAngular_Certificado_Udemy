import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosComprasComponent } from './lista-productos-compras.component';

describe('ListaProductosComprasComponent', () => {
  let component: ListaProductosComprasComponent;
  let fixture: ComponentFixture<ListaProductosComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
