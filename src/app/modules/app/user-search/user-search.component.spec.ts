import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../../users.service';
import {ShareModule} from "../../share/share.module";
import {MatInputModule} from "@angular/material/input";

describe('UserSearchComponent component', () => {
  let fixture: ComponentFixture<UserSearchComponent>;
  let localService;
  const userServiceStub = {
    getUsers() {
      return [
        {
          id: 5,
          first_name: 'Ivan',
          last_name: 'Petrov',
          email: 'petrov@gmail.com',
          avatar: 'sdf',
        },
        {
          id: 6,
          first_name: 'Dasha',
          last_name: 'Petrov',
          email: 'petrov@gmail.com',
          avatar: 'sdf',
        },
        {
          id: 7,
          first_name: 'Misha',
          last_name: 'Petrov',
          email: 'petrov@gmail.com',
          avatar: 'sdf',
        },
      ];
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ShareModule, MatInputModule],
      declarations: [UserSearchComponent],
      providers: [{ provide: UsersService, useValue: userServiceStub }],
    });

    fixture = TestBed.createComponent(UserSearchComponent);
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
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
    const comp = fixture.componentInstance;
    comp.getUserInformation(user);
    expect(comp.selectedUser).toEqual(user);
  });

  it('should create the form', () => {
    const comp = fixture.componentInstance;
    comp.createSearchUserForm();
    expect(comp.searchUserForm).toBeDefined();
  });

  it('should return an array that has been filtered', () => {
    const result = [
      {
        id: 5,
        first_name: 'Ivan',
        last_name: 'Petrov',
        email: 'petrov@gmail.com',
        avatar: 'sdf',
      },
    ];
    const comp = fixture.componentInstance;
    comp.searchUserForm = new FormGroup({
      userFirstName: new FormControl('n'),
    });
    comp.searchUsers();
    comp.searchUsers$.subscribe((r) => {
      expect(r).toEqual(result);
    });
  });
});
