import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaRutasComponent } from './papa-rutas.component';

describe('PapaRutasComponent', () => {
  let component: PapaRutasComponent;
  let fixture: ComponentFixture<PapaRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
