import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersComponent } from './newsletters.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

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
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(NewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
