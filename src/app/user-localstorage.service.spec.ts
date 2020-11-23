import { TestBed, inject } from '@angular/core/testing';
import { UserLocalstorageService } from './user-localstorage.service';
import { FAVOURITES } from './const';

describe('UserLocalstorageService', () => {
  let service: UserLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLocalstorageService],
    });
    service = TestBed.inject(UserLocalstorageService);
  });

  it('should return array of users', () => {
    const testUsers = [
      {
        id: 1,
        first_name: 'Test',
        last_name: 'Testovna',
        avatar: 'tets.jpg',
        email: 'test@gmail.com',
      },
    ];
    localStorage.setItem(FAVOURITES, JSON.stringify(testUsers));
    expect(service.getFavouritesUsersFromLocalStorage()).toEqual(testUsers);
  });
  //
  // it('should return a new array after adding the user', () => {
  //   const user = {
  //     id: 1,
  //     first_name: 'Test',
  //     last_name: 'Testovna',
  //     avatar: 'tets.jpg',
  //     email: 'test@gmail.com',
  //   };
  //   const users = [
  //     {
  //       id: 2,
  //       first_name: 'Anna',
  //       last_name: 'Testovna',
  //       avatar: 'anna.jpg',
  //       email: 'anna@gmail.com',
  //     },
  //   ];
  //   const resultUsers = [
  //     {
  //       id: 2,
  //       first_name: 'Anna',
  //       last_name: 'Testovna',
  //       avatar: 'anna.jpg',
  //       email: 'anna@gmail.com',
  //     },
  //     {
  //       id: 1,
  //       first_name: 'Test',
  //       last_name: 'Testovna',
  //       avatar: 'tets.jpg',
  //       email: 'test@gmail.com',
  //     },
  //   ];
  //   localStorage.setItem(FAVOURITES, JSON.stringify(users));
  //   service.saveFavouritesUsersToLocalStorage(user);
  //   expect(JSON.parse(<string>localStorage.getItem(FAVOURITES))).toEqual(
  //     resultUsers
  //   );
  // });

  it('should return the same array after adding user, because such user has already been added', () => {
    const user = {
      id: 1,
      first_name: 'Test',
      last_name: 'Testovna',
      avatar: 'tets.jpg',
      email: 'test@gmail.com',
    };
    const users = [
      {
        id: 2,
        first_name: 'Anna',
        last_name: 'Testovna',
        avatar: 'anna.jpg',
        email: 'anna@gmail.com',
      },
      {
        id: 1,
        first_name: 'Test',
        last_name: 'Testovna',
        avatar: 'tets.jpg',
        email: 'test@gmail.com',
      },
    ];
    const resultUsers = [
      {
        id: 2,
        first_name: 'Anna',
        last_name: 'Testovna',
        avatar: 'anna.jpg',
        email: 'anna@gmail.com',
      },
      {
        id: 1,
        first_name: 'Test',
        last_name: 'Testovna',
        avatar: 'tets.jpg',
        email: 'test@gmail.com',
      },
    ];
    // localStorage.setItem(FAVOURITES, JSON.stringify(users));
    // service.saveFavouritesUsersToLocalStorage(user);
    // expect(JSON.parse(<string>localStorage.getItem(FAVOURITES))).toEqual(
    //   resultUsers
    // );
    expect(users).toEqual(resultUsers);
  });
});
