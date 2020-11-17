import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserFavoriteComponent} from './user-favorite.component';
import {ShareModule} from '../share/share.module';
import {UserFavoriteRoutingModule} from './user-favorite-routing.module';

@NgModule({
  declarations: [UserFavoriteComponent],
  imports: [
    CommonModule,
    ShareModule,
    UserFavoriteRoutingModule
  ],
  exports: []
})
export class UserFavoriteModule { }
