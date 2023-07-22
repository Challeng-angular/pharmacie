import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CardDetailsComponent } from './card-details.component';
import { ProductsService } from 'src/app/services/products.service';
import { TranslateModule } from '@ngx-translate/core';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot() ],
      declarations: [CardDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } },
        },
        ProductsService,
      ],
    });
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
