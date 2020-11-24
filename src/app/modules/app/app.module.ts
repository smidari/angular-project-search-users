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
import {appReducers} from '../../store/reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../../store/effects/user.effects';
import {HomeComponent} from './component/home/home.component';
import { IfWithTimerDirective } from './directives/if-with-timer.directive';
import { FormSignInComponent } from './component/form-sign-in/form-sign-in.component';
import {MatTableModule} from '@angular/material/table';
import { SwitchComponent } from './component/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IfWithTimerDirective,
    FormSignInComponent,
    SwitchComponent
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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
