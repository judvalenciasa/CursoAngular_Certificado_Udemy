import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioToDOComponent } from './formulario-to-do.component';

describe('FormularioToDOComponent', () => {
  let component: FormularioToDOComponent;
  let fixture: ComponentFixture<FormularioToDOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioToDOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioToDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
