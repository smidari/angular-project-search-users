import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {FavotiteUserComponent} from "./favotite-user/favotite-user.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'favorite', component: FavotiteUserComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
