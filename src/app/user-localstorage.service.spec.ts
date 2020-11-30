import { TestBed } from '@angular/core/testing';
import { UserLocalstorageService } from './user-localstorage.service';
import { FAVOURITES } from './const';

describe('UserLocalstorageService', () => {
  let service: UserLocalstorageService;
  const localStore = {};
  const fakeLocalStorage = {
    getItem(key): any {
      return localStore[key];
    },
    setItem(key, value): any {
      localStore[key] = value + '';
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLocalstorageService],
    });
    service = TestBed.inject(UserLocalstorageService);
  });
});
