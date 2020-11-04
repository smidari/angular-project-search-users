import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [UserDetailComponent, NavbarComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  exports: [UserDetailComponent, NavbarComponent],
})
export class ShareModule {}
