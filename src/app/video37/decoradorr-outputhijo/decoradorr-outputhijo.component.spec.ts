import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorrOutputhijoComponent } from './decoradorr-outputhijo.component';

describe('DecoradorrOutputhijoComponent', () => {
  let component: DecoradorrOutputhijoComponent;
  let fixture: ComponentFixture<DecoradorrOutputhijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorrOutputhijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorrOutputhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
