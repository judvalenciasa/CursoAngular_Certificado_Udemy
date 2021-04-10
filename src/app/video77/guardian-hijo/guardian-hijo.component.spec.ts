import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianHijoComponent } from './guardian-hijo.component';

describe('GuardianHijoComponent', () => {
  let component: GuardianHijoComponent;
  let fixture: ComponentFixture<GuardianHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
