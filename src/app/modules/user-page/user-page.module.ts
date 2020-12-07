import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user/user-page.component';

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule],
  exports: [UserPageComponent],
})
export class UserPageModule {}
