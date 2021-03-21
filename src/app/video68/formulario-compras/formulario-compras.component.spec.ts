import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComprasComponent } from './formulario-compras.component';

describe('FormularioComprasComponent', () => {
  let component: FormularioComprasComponent;
  let fixture: ComponentFixture<FormularioComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
