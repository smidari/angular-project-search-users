import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import {AllUsersComponent} from '../share/containers/all-users/all-users.component';

const routes: Routes = [
  { path: 'search', component: UserSearchComponent },
  { path: 'users', component: AllUsersComponent },
  {
    path: 'favorite',
    loadChildren: () =>
      import('../user-favorite/user-favorite.module').then(
        (m) => m.UserFavoriteModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
