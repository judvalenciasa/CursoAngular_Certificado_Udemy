import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateforComponent } from './ngtemplatefor.component';

describe('NgtemplateforComponent', () => {
  let component: NgtemplateforComponent;
  let fixture: ComponentFixture<NgtemplateforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtemplateforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
