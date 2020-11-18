import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavoriteComponent } from './component/user-favorite.component';
import { ShareModule } from '../share/share.module';
import { UserFavoriteRoutingModule } from './user-favorite-routing.module';
import { UserFavoriteComponent as UserFavoriteContainerComponent } from './container/user-favorite/user-favorite.component';

@NgModule({
  declarations: [UserFavoriteComponent, UserFavoriteContainerComponent],
  imports: [CommonModule, ShareModule, UserFavoriteRoutingModule],
  exports: [],
})
export class UserFavoriteModule {}
