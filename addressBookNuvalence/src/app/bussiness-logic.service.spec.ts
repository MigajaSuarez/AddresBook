import { TestBed } from '@angular/core/testing';

import { BussinessLogicService } from './bussiness-logic.service';

describe('BussinessLogicService', () => {
  let service: BussinessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
