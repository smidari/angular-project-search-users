import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AllUsersComponent as UsersContainerComponent } from './containers/all-users/all-users.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UserDetailComponent,
    NavbarComponent,
    UsersContainerComponent,
    AllUsersComponent,
  ],
  imports: [CommonModule, MatToolbarModule, RouterModule, MatTableModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [UserDetailComponent, NavbarComponent],
})
export class ShareModule {}
