import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ShareModule} from "../share/share.module";
import {AppRoutingModule} from "./app-routing.module";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareModule, AppRoutingModule],
      declarations: [ AppComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
