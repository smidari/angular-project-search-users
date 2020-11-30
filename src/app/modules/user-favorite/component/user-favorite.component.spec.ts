import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFavoriteComponent } from './user-favorite.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserFavoriteComponent', () => {
  let fixture: ComponentFixture<UserFavoriteComponent>;
  let comp: UserFavoriteComponent;
  const arrayUsers = [
    {
      id: 5,
      first_name: 'Ivan',
      last_name: 'Petrov',
      email: 'petrov@gmail.com',
      avatar: 'sdf',
    },
  ];
  const mockUser = {
    id: 3,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    avatar: 'ivan.jpg',
    email: 'ivan@gmail.com',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [UserFavoriteComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(UserFavoriteComponent);
    comp = fixture.componentInstance;
  });

  it('should create', () => {
    expect(comp).toBeDefined();
  });

  it('should set a new favorite user', () => {
    comp.onSelect(mockUser);
    expect(comp.selectedFavouritesUser).toEqual(mockUser);
  });

  it('should delete favouritesUser by event emitter', () => {
    let result = null;
    comp.deleteUser.subscribe((v) => (result = v));
    comp.deleteFavoriteUser(mockUser);
    expect(result).toEqual(mockUser);
  });
});
