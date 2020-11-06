import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { UsersService } from '../../../users.service';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let userServiceStub: Partial<UsersService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      providers: [{ provide: UsersService, useValue: userServiceStub }],
    });
  });
});
