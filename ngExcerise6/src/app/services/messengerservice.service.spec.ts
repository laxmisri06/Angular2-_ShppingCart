import { TestBed } from '@angular/core/testing';

import { MessengerserviceService } from './messengerservice.service';

describe('MessengerserviceService', () => {
  let service: MessengerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
