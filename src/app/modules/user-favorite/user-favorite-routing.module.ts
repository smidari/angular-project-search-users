import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFavoriteComponent } from './component/user-favorite.component';
import {UserFavoriteComponent as UserFavoriteContainerComponent} from './container/user-favorite/user-favorite.component';

const routes: Routes = [{ path: '', component: UserFavoriteContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFavoriteRoutingModule { }
