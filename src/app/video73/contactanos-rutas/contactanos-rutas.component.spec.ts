import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosRutasComponent } from './contactanos-rutas.component';

describe('ContactanosRutasComponent', () => {
  let component: ContactanosRutasComponent;
  let fixture: ComponentFixture<ContactanosRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
