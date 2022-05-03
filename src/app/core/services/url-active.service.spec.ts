import { TestBed } from '@angular/core/testing';

import { UrlActiveService } from './url-active.service';

describe('UrlActiveService', () => {
  let service: UrlActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
