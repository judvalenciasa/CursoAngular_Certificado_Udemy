import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleEnlacepadreComponent } from './doble-enlacepadre.component';

describe('DobleEnlacepadreComponent', () => {
  let component: DobleEnlacepadreComponent;
  let fixture: ComponentFixture<DobleEnlacepadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobleEnlacepadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobleEnlacepadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
