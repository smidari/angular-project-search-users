import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { UsersService } from '../../../users.service';
import { UserLocalstorageService } from '../../../user-localstorage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserSearchComponent component', () => {
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserSearchComponent],
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

  it('should', ()=>{

  })
});
