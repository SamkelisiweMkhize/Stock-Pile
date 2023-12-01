import { TestBed } from '@angular/core/testing';

import { SearchpipeService } from './searchpipe.service';

describe('SearchpipeService', () => {
  let service: SearchpipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchpipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
