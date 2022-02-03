import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingdetailComponent } from './shoppingdetail.component';

describe('ShoppingdetailComponent', () => {
  let component: ShoppingdetailComponent;
  let fixture: ComponentFixture<ShoppingdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
