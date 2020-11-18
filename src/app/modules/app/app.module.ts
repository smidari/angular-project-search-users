import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';

import { MatInputModule } from '@angular/material/input';

import {ShareModule} from '../share/share.module';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../../store/reducer/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../../store/effects/user.effects';
import {UserFavoriteEffects} from '../../store/effects/user-favorite.effects';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, UserFavoriteEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
