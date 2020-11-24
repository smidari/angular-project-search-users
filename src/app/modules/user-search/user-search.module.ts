import { NgModule } from '@angular/core';
import { UserSearchComponent as UserSearchContainerComponent } from './container/user-search/user-search.component';
import { UserSearchComponent } from './component/user-search.component';
import { ShareModule } from '../share/share.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchRoutingModule } from './user-search-routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [UserSearchComponent, UserSearchContainerComponent],
  imports: [
    ShareModule,
    MatInputModule,
    ReactiveFormsModule,
    UserSearchRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [],
})
export class UserSearchModule {}
