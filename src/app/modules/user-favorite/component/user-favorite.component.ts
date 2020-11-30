import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../../../user';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}
  ngOnInit(): void {}

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
  }

  trackById(index, item): number {
    return item.id;
  }

  deleteFavoriteUser(user: User): void {
    this.deleteUser.emit(user);
  }

  goToUserPage(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
