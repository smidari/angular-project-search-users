import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserFavoriteComponent} from "./user-favorite/user-favorite.component";
import {UserSearchComponent} from "./user-search/user-search.component";

const routes: Routes = [
  { path: 'favorite', component: UserFavoriteComponent },
  { path: 'search', component: UserSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
