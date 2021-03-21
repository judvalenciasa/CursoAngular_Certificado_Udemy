import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceObjetospadreComponent } from './enlace-objetospadre.component';

describe('EnlaceObjetospadreComponent', () => {
  let component: EnlaceObjetospadreComponent;
  let fixture: ComponentFixture<EnlaceObjetospadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlaceObjetospadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceObjetospadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
