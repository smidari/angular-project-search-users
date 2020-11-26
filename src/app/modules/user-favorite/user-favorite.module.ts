import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavoriteComponent } from './component/user-favorite.component';
import { ShareModule } from '../share/share.module';
import { UserFavoriteRoutingModule } from './user-favorite-routing.module';
import { UserFavoriteComponent as UserFavoriteContainerComponent } from './container/user-favorite/user-favorite.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [UserFavoriteComponent, UserFavoriteContainerComponent],
  imports: [CommonModule, ShareModule, UserFavoriteRoutingModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [],
})
export class UserFavoriteModule {}
