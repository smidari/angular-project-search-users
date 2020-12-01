import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent as AllUsersContainerComponent } from '../share/containers/all-users/all-users.component';
import { HomeComponent } from './component/home/home.component';
import {UserComponent} from '../user/user/user.component';
import {UserResolver} from '../user/user.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: AllUsersContainerComponent },
  { path: 'users/:id', component: UserComponent, resolve: { user: UserResolver } },
  {
    path: 'favorite',
    loadChildren: () =>
      import('../user-favorite/user-favorite.module').then(
        (m) => m.UserFavoriteModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../user-search/user-search.module').then(
        (m) => m.UserSearchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
