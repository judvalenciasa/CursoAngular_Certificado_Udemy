import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigletonHomeComponent } from './sigleton-home.component';

describe('SigletonHomeComponent', () => {
  let component: SigletonHomeComponent;
  let fixture: ComponentFixture<SigletonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigletonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigletonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
