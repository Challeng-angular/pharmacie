import { NewslettersComponent } from './../../newsletters/newsletters.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { BlocPresentationComponent } from '../../bloc-presentation/bloc-presentation.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BlocTitleComponent,
        BlocPresentationComponent,
        NewslettersComponent,
      ],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
