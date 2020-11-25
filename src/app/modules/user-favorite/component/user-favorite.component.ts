import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFavoriteComponent implements OnInit {
  @Input() favouritesUsers: User[];

  selectedFavouritesUser: User;

  constructor() {}
  ngOnInit(): void {}

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
  }

  trackById(index, item): number {
    return item.id;
  }
}
