import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicioComponent } from './home-servicio.component';

describe('HomeServicioComponent', () => {
  let component: HomeServicioComponent;
  let fixture: ComponentFixture<HomeServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
