import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { User } from '../../../user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  searchUserForm: FormGroup;
  usersFound: User[];
  selectedUser: User;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.createSearchUserForm();
    this.searchUsers();
  }

  private createSearchUserForm() {
    this.searchUserForm = new FormGroup({
      userFirstName: new FormControl(null),
    });
  }

  searchUsers() {
    combineLatest([
      this.userService.getUsers(),
      this.searchUserForm.get('userFirstName').valueChanges,
    ])
      .pipe(
        map(([users, value]) => {
          return users.data.filter((user) => user.first_name.includes(value));
        })
      )
      .subscribe((users) => (this.usersFound = users));
  }

  addToFavourites(user: User) {
    this.userService.saveFavouritesUsersToLocalStorage(user);
  }

  getUserInformation(user: User) {
    this.selectedUser = user;
  }

  trackById(index, item) {
    return item.id;
  }
}