import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent as UserSearchContainerComponent } from './container/user-search/user-search.component';

const routes: Routes = [{ path: '', component: UserSearchContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSearchRoutingModule {}
