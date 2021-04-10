import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaRutaDinamicaComponent } from './acerca-ruta-dinamica.component';

describe('AcercaRutaDinamicaComponent', () => {
  let component: AcercaRutaDinamicaComponent;
  let fixture: ComponentFixture<AcercaRutaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaRutaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaRutaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
