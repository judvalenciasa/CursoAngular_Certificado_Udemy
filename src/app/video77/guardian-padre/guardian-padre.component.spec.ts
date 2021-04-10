import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianPadreComponent } from './guardian-padre.component';

describe('GuardianPadreComponent', () => {
  let component: GuardianPadreComponent;
  let fixture: ComponentFixture<GuardianPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
