import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlarmsComponent } from './product-alarms.component';

describe('ProductAlarmsComponent', () => {
  let component: ProductAlarmsComponent;
  let fixture: ComponentFixture<ProductAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
