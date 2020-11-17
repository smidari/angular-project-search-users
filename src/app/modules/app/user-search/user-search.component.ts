import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { User } from '../../../user';
import { UserLocalstorageService } from '../../../user-localstorage.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent implements OnInit {
  searchUserForm: FormGroup;
  selectedUser: User;
  searchUsers$: Observable<User[]>;

  constructor(
    private userService: UsersService,
    private userLocalstorageService: UserLocalstorageService
  ) {}

  ngOnInit(): void {
    this.createSearchUserForm();
    this.searchUsers();
  }

  createSearchUserForm(): void {
    this.searchUserForm = new FormGroup({
      userFirstName: new FormControl(null),
    });
  }

  searchUsers(): void {
    this.searchUsers$ = combineLatest([
      this.userService.getUsers(),
      this.searchUserForm.get('userFirstName').valueChanges,
    ]).pipe(
      map(([users, value]) => {
        return users.data.filter((user) => user.first_name.includes(value));
      })
    );
  }

  addToFavourites(user: User): void {
    this.userLocalstorageService.saveFavouritesUsersToLocalStorage(user);
  }

  getUserInformation(user: User): void {
    this.selectedUser = user;
  }

  trackById(index, item): number {
    return item.id;
  }
}
