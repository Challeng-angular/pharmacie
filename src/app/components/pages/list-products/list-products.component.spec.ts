import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { CardComponent } from '../../card/card.component';
import { MatCardModule } from '@angular/material/card';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsComponent, CardComponent],
      imports: [MatCardModule]
    });
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
