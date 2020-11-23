import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent as AllUsersContainerComponent } from '../share/containers/all-users/all-users.component';
import { UserSearchComponent as UserSearchContainerComponent } from './container/user-search/user-search.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: UserSearchContainerComponent },
  { path: 'users', component: AllUsersContainerComponent },
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
