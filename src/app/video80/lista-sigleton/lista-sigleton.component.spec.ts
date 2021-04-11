import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSigletonComponent } from './lista-sigleton.component';

describe('ListaSigletonComponent', () => {
  let component: ListaSigletonComponent;
  let fixture: ComponentFixture<ListaSigletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSigletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSigletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
