import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent component', () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should create a link to home page', () => {
    fixture.detectChanges();
    const infoMessageEl: HTMLElement = fixture.debugElement.nativeElement;
    const a = infoMessageEl.querySelector('a');
    expect(a.textContent).toContain('Home');
  });
});
