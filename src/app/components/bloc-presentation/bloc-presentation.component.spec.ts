import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPresentationComponent } from './bloc-presentation.component';

describe('BlocPresentationComponent', () => {
  let component: BlocPresentationComponent;
  let fixture: ComponentFixture<BlocPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocPresentationComponent]
    });
    fixture = TestBed.createComponent(BlocPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
