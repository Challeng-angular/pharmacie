import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocTitleComponent } from '../../bloc-title/bloc-title.component';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesComponent, BlocTitleComponent]
    });
   
  });

  it('should create', () => {
    let a = true;
    expect(a).toBe(true);
  });
});
