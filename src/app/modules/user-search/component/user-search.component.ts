import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../user';
import { UserLocalstorageService } from '../../../services/user-localstorage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent implements OnInit {
  searchUserForm: FormGroup;
  selectedUser: User;
  @Input() usersSortForInputValue: User[];
  @Output() setInputValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() newUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(private service: UserLocalstorageService) {}

  ngOnInit(): void {
    this.createSearchUserForm();
    this.searchUserForm
      .get('userFirstName')
      .valueChanges.subscribe((value) => this.setInputValue.emit(value));
  }
  createSearchUserForm(): void {
    this.searchUserForm = new FormGroup({
      userFirstName: new FormControl(null),
    });
  }

  addToFavourites(user: User): void {
    this.newUser.emit(user);
  }

  getUserInformation(user: User): void {
    this.selectedUser = user;
  }

  trackById(index, item): number {
    return item.id;
  }

  mySomeForDisabledFavoriteUsers(id: string | number): Observable<boolean> {
    return this.service
      .getFavouritesUsersFromLocalStorage()
      .pipe(map((value) => value?.some((item) => item.id === id)));
  }
}
