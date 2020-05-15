import { TestBed } from '@angular/core/testing';

import { ValoremonService } from './valoremon.service';

describe('ValoremonService', () => {
  let service: ValoremonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoremonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
