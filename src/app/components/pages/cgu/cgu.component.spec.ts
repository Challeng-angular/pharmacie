import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CguComponent } from './cgu.component';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

describe('CguComponent', () => {
  let component: CguComponent;
  let fixture: ComponentFixture<CguComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CguComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(CguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
