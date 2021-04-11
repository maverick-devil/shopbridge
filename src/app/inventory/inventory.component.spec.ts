import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { Item } from './item.model';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit items when onSelected is invoked', () => {
    const item: Item = {
      id: 1,
      price: 100,
      quantity: 2,
      title: 'dummy',
      description: 'dummy',
      imagePath: ''
    };
    component.onSelected(item);
    expect(component.selectedItem).toEqual(item);
  });
});
