import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserFavoriteComponent } from './user-favorite.component';
import { UserLocalstorageService } from '../../user-localstorage.service';
import {ShareModule} from "../share/share.module";

describe('UserFavoriteComponent component', () => {
  let fixture: ComponentFixture<UserFavoriteComponent>;
  let localService;
  let arrayUsers = [
    {
      id: 5,
      first_name: 'Ivan',
      last_name: 'Petrov',
      email: 'petrov@gmail.com',
      avatar: 'sdf',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ShareModule],
      declarations: [UserFavoriteComponent],
      providers: [UserLocalstorageService],
    });

    fixture = TestBed.createComponent(UserFavoriteComponent);
    localService = jasmine.createSpyObj('UserLocalstorageService', {
      getFavouritesUsersFromLocalStorage: arrayUsers,
    });
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should set a new favorite user', () => {
    const user = {
      id: 3,
      first_name: 'Ivan',
      last_name: 'Ivanov',
      avatar: 'ivan.jpg',
      email: 'ivan@gmail.com',
    };
    const comp = fixture.componentInstance;
    comp.onSelect(user);
    expect(comp.selectedFavouritesUser).toEqual(user);
  });

  it('should set favouritesUsers from local storage', () => {
    const comp = fixture.componentInstance;
    comp.favouritesUsers = localService.getFavouritesUsersFromLocalStorage();
    expect(comp.favouritesUsers).toEqual(arrayUsers);
  });
});
