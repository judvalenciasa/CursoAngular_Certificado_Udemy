import { TestBed } from '@angular/core/testing';

import { ListaSigletonService } from './lista-sigleton.service';

describe('ListaSigletonService', () => {
  let service: ListaSigletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSigletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
