import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPaPaComponent } from './compras-pa-pa.component';

describe('ComprasPaPaComponent', () => {
  let component: ComprasPaPaComponent;
  let fixture: ComponentFixture<ComprasPaPaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasPaPaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPaPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
