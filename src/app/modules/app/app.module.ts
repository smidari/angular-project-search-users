import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';

import { MatInputModule } from '@angular/material/input';

import {ShareModule} from "../share/share.module";
import { SdaComponent } from './sda/sda.component';
import { SssComponent } from './sss/sss.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    SdaComponent,
    SssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
