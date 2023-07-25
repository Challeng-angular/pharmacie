import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material-module';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
        BlocTitleComponent,
        ContactFormComponent,
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
