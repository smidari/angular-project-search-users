import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSearchComponent} from "./user-search/user-search.component";

const routes: Routes = [
  { path: 'search', component: UserSearchComponent},
  { path: 'favorite', loadChildren: () => import('../user-favorite/user-favorite.module').then(m => m.UserFavoriteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
