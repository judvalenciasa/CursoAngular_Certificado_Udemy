import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorrOutputComponent } from './decoradorr-output.component';

describe('DecoradorrOutputComponent', () => {
  let component: DecoradorrOutputComponent;
  let fixture: ComponentFixture<DecoradorrOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorrOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorrOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
