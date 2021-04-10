import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaRutaDinamicaComponent } from './papa-ruta-dinamica.component';

describe('PapaRutaDinamicaComponent', () => {
  let component: PapaRutaDinamicaComponent;
  let fixture: ComponentFixture<PapaRutaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaRutaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaRutaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
