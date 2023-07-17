import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsComponent } from './promotions.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { CardComponent } from '../../card/card.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

describe('PromotionsComponent', () => {
  let component: PromotionsComponent;
  let fixture: ComponentFixture<PromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionsComponent, BlocTitleComponent, CardComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
      ],
    });
    fixture = TestBed.createComponent(PromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
