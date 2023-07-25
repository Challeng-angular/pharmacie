import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvComponent } from './cgv.component';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

describe('CgvComponent', () => {
  let component: CgvComponent;
  let fixture: ComponentFixture<CgvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgvComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(CgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
