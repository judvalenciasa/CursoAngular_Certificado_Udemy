import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaRutaComponent } from './acerca-ruta.component';

describe('AcercaRutaComponent', () => {
  let component: AcercaRutaComponent;
  let fixture: ComponentFixture<AcercaRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
