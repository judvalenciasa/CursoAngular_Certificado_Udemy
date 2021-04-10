import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosRutaDinamicaComponent } from './contactanos-ruta-dinamica.component';

describe('ContactanosRutaDinamicaComponent', () => {
  let component: ContactanosRutaDinamicaComponent;
  let fixture: ComponentFixture<ContactanosRutaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosRutaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosRutaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
