import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { ServicesComponent } from './services.component';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesComponent, BlocTitleComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
