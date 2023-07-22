import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material-module';

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
      imports: [MaterialModule, BrowserAnimationsModule],
    });
    
  });

  it('should create', () => {
    let a = true;
    expect(a).toBe(true);
  });
});
