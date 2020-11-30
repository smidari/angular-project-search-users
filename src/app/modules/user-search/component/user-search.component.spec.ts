import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';
import { UsersService } from '../../../users.service';
import { cold } from 'jasmine-marbles';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserSearchComponent component', () => {
  let fixture: ComponentFixture<UserSearchComponent>;
  let comp;
  const valuesGetUsers = {
    a: { data: [{ first_name: 'Ivan' }, { first_name: 'masha' }] },
  };
  const valuesAfter = { x: [{ first_name: 'Ivan' }] };
  let myUsersService;
  let userService;

  beforeEach(() => {
    myUsersService = {
      getUsers() {
        return cold('a|', valuesGetUsers);
      },
    };
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [UserSearchComponent],
      providers: [{ provide: UsersService, useValue: myUsersService }],
    });
    fixture = TestBed.createComponent(UserSearchComponent);
    comp = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
  });

  it('should create the form', () => {
    comp.createSearchUserForm();
    expect(comp.searchUserForm).toBeDefined();
  });

  it('should be create', () => {
    expect(comp).toBeDefined();
  });

  it('should set a selected user', () => {
    const user = {
      id: 10,
      first_name: 'Ivan',
      last_name: 'Ivanov',
      avatar: 'ivan.jpg',
      email: 'ivan@gmail.com',
    };
    comp.getUserInformation(user);
    expect(comp.selectedUser).toEqual(user);
  });
});
