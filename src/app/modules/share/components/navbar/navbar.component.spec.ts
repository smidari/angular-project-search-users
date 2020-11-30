import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let comp: NavbarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
  });

  it('should create', () => {
    expect(comp).toBeDefined();
  });

  it('should create a link to home page', () => {
    const infoMessageEl: HTMLElement = fixture.debugElement.nativeElement;
    const a = infoMessageEl.querySelector('a');
    expect(a.textContent).toContain('Home');
  });
});
