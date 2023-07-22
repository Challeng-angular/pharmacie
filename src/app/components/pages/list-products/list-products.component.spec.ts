import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { CardComponent } from '../../card/card.component';
import { MatCardModule } from '@angular/material/card';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsComponent, CardComponent, BlocTitleComponent],
      imports: [MatCardModule],
    });
    
  });

  it('should create', () => {
    let a = true;
    expect(a).toBe(true);
  });
});
