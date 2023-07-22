import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocTitleComponent } from './bloc-title.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BlocTitleComponent', () => {
  let component: BlocTitleComponent;
  let fixture: ComponentFixture<BlocTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot() ],
      declarations: [BlocTitleComponent],
    });
    fixture = TestBed.createComponent(BlocTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
