import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';

import {ShareModule} from '../share/share.module';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../../store/reducer/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../../store/effects/user.effects';
import {UserSearchComponent as UserSearchContainerComponent} from './container/user-search/user-search.component';
import {UserSearchComponent} from './component/user-search/user-search.component';
import {HomeComponent} from './component/home/home.component';
import { IfWithTimerDirective } from './directives/if-with-timer.directive';
import { FormSignInComponent } from './component/form-sign-in/form-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserSearchContainerComponent,
    HomeComponent,
    IfWithTimerDirective,
    FormSignInComponent
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
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
