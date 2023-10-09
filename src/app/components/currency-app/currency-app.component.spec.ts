import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAppComponent } from './currency-app.component';

describe('CurrencyAppComponent', () => {
  let component: CurrencyAppComponent;
  let fixture: ComponentFixture<CurrencyAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyAppComponent]
    });
    fixture = TestBed.createComponent(CurrencyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
