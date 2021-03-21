import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroPadreComponent } from './cronometro-padre.component';

describe('CronometroPadreComponent', () => {
  let component: CronometroPadreComponent;
  let fixture: ComponentFixture<CronometroPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronometroPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronometroPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
