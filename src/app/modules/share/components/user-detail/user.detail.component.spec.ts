import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent component', () => {
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserDetailComponent],
    });
    fixture = TestBed.createComponent(UserDetailComponent);
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
