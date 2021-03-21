import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroHijoComponent } from './cronometro-hijo.component';

describe('CronometroHijoComponent', () => {
  let component: CronometroHijoComponent;
  let fixture: ComponentFixture<CronometroHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronometroHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronometroHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
