import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../users.service';
import { ShareModule } from '../../share/share.module';
import { MatInputModule } from '@angular/material/input';
import { cold } from 'jasmine-marbles';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      imports: [
        HttpClientTestingModule,
        ShareModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      declarations: [UserSearchComponent],
      providers: [{ provide: UsersService, useValue: myUsersService }],
    });
    fixture = TestBed.createComponent(UserSearchComponent);
    comp = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
  });

  it('should return filtered array', async () => {
    const expected = cold('x|', valuesAfter);
    fixture.detectChanges();

    comp.searchUserForm.setValue({ userFirstName: 'n' });

    setTimeout(() => expect(comp.searchUsers$).toBeObservable(expected), 300);
  });

  it('should create the form', () => {
    comp.createSearchUserForm();
    expect(comp.searchUserForm).toBeDefined();
  });

  it('should create', () => {
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
