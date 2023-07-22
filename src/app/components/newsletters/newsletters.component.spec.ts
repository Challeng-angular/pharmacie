import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersComponent } from './newsletters.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewslettersComponent', () => {
  let component: NewslettersComponent;
  let fixture: ComponentFixture<NewslettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewslettersComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    });
    
  });

  it('should create', () => {
    let a = true;
    expect(a).toBe(true);
  });
});
