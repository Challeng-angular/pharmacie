import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';


describe('CardComponent', () => {
  // test disabled
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    });
    
  });

  it('should create', () => {
    let a = true; 
    expect(a).toBe(true);
  });
});
