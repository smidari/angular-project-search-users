import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../users.service';
import { ShareModule } from '../../share/share.module';
import { MatInputModule } from '@angular/material/input';
import { filter, map } from 'rxjs/operators';
import { cold } from 'jasmine-marbles';
import { FormControl, FormGroup } from '@angular/forms';

describe('UserSearchComponent component', () => {
  let fixture: ComponentFixture<UserSearchComponent>;
  let userService;

  beforeEach(() => {
    userService = jasmine.createSpy('UserService');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ShareModule, MatInputModule],
      declarations: [UserSearchComponent],
      providers: [{ provide: UsersService, useValue: userService }],
    });
    fixture = TestBed.createComponent(UserSearchComponent);
  });

  it('should return fitered array', () => {
    const valuesGetUsers = {a: {data: [{first_name: 'Ivan'},{first_name: 'masha'}]}};
    const valuesAfter = {x: [{first_name: 'Ivan'}]};

    userService.getUsers = () => cold('-a-|', valuesGetUsers);

    const comp = fixture.componentInstance;
    comp.searchUserForm = new FormGroup({
      userFirstName: new FormControl('n'),
    });
    const expected = cold('-x-|', valuesAfter);
    comp.searchUsers();

    expect(comp.searchUsers$).toBeObservable(expected);
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
});
