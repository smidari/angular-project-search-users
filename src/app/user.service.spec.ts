import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserApi } from './user';

describe('UsersService', () => {
  let userService: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientTestingModule],
    });
    userService = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be list of users', () => {
    const mockUsers: UserApi = {
      page: 1,
      per_page: 34,
      total: 3,
      total_pages: 3,
      data: [
        {
          id: 1,
          last_name: 'Ivanova',
          avatar: 'dasha.jpg',
          first_name: 'Dasha',
          email: 'dasha@gmail.com',
        },
      ],
    };
    userService.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });
    const req = httpTestingController.expectOne(
      'https://reqres.in/api/users?page=2'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
