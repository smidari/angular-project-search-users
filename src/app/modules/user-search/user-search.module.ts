import { NgModule } from '@angular/core';
import { UserSearchComponent as UserSearchContainerComponent } from './container/user-search/user-search.component';
import { UserSearchComponent } from './component/user-search.component';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchRoutingModule } from './user-search-routing.module';
import {CommonModule} from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [UserSearchComponent, UserSearchContainerComponent],
  imports: [
    ShareModule,
    MatInputModule,
    ReactiveFormsModule,
    UserSearchRoutingModule,
    FormsModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [],
})
export class UserSearchModule {}
