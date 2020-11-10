import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";

describe('NavbarComponent component', () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatToolbarModule],
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should create a link to home page', () => {
    const infoMessageEl: HTMLElement = fixture.debugElement.nativeElement;
    const a = infoMessageEl.querySelector('a');
    expect(a.textContent).toContain('Home');
  });
});
