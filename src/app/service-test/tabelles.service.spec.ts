import { TestBed } from '@angular/core/testing';

import { TabellesService } from './tabelles.service';

describe('TabellesService', () => {
  let service: TabellesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabellesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
