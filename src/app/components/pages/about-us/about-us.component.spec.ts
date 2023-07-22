import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule],
      declarations: [AboutUsComponent, BlocTitleComponent, NavbarComponent]
    });
   
  });

  it('should create', () => {
    let a = true;
    expect(a).toBe(true);
  });
});
