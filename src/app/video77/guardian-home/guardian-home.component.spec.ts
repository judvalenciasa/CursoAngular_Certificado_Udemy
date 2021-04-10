import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianHomeComponent } from './guardian-home.component';

describe('GuardianHomeComponent', () => {
  let component: GuardianHomeComponent;
  let fixture: ComponentFixture<GuardianHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
