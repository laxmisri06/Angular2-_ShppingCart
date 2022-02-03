import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingmenuComponent } from './shoppingmenu.component';

describe('ShoppingmenuComponent', () => {
  let component: ShoppingmenuComponent;
  let fixture: ComponentFixture<ShoppingmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
