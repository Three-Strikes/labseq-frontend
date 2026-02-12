import { TestBed } from '@angular/core/testing';

import { LabseqBackend } from './labseq-backend';

describe('LabseqBackend', () => {
  let service: LabseqBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabseqBackend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
