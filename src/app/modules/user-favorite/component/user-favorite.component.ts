import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input,
  OnInit, Output,
} from '@angular/core';
import { User } from '../../../user';
import {of} from 'rxjs';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFavoriteComponent implements OnInit {
  @Input() favouritesUsers: User[];
  @Output() deleteUser: EventEmitter<User> = new EventEmitter<User>();
  selectedFavouritesUser: User;

  constructor() {}
  ngOnInit(): void {}

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
  }

  trackById(index, item): number {
    return item.id;
  }

  deleteFavoriteUser(user: User): void {
    of(user).subscribe((value) => this.deleteUser.emit(value));
  }
}
