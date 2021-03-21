import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleEnlaceComponent } from './doble-enlace.component';

describe('DobleEnlaceComponent', () => {
  let component: DobleEnlaceComponent;
  let fixture: ComponentFixture<DobleEnlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobleEnlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobleEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
