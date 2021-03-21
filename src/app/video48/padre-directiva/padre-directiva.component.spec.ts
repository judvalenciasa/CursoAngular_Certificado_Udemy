import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDirectivaComponent } from './padre-directiva.component';

describe('PadreDirectivaComponent', () => {
  let component: PadreDirectivaComponent;
  let fixture: ComponentFixture<PadreDirectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreDirectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
