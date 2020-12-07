import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent as AllUsersContainerComponent } from '../share/containers/all-users/all-users.component';
import { HomeComponent } from './component/home/home.component';
import { UserPageComponent } from '../user-page/user/user-page.component';
import { UserResolver } from '../user-page/user.resolver';
import { AuthGuard } from '../../services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: AllUsersContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
    resolve: { user: UserResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('../user-favorite/user-favorite.module').then(
        (m) => m.UserFavoriteModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../user-search/user-search.module').then(
        (m) => m.UserSearchModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login-page/login-page.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
