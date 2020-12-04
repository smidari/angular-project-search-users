import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';

import { ShareModule } from '../share/share.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../store/effects/user.effects';
import { HomeComponent } from './component/home/home.component';
import { IfWithTimerDirective } from './directives/if-with-timer.directive';
import { MatTableModule } from '@angular/material/table';
import { SwitchComponent } from './component/switch/switch.component';
import { FormSignUpComponent } from './component/form-sign-up/form-sign-up.component';
import {UserModule} from '../user/user.module';
import {AuthGuard} from "../../auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IfWithTimerDirective,
    SwitchComponent,
    FormSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    ShareModule,
    UserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
