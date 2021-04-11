import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';

import itemsList from '../../assets/items.json';
import { Item } from './item.model';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should  update items list', () => {
    spyOn(service.itemsSubject, 'next');
    service.updateItemsList();
    expect(service.itemsSubject.next).toHaveBeenCalled();
  });

  it('should  delete items', () => {
    spyOn(service, 'updateItemsList');
    service.deleteItem(1);
    expect(service.updateItemsList).toHaveBeenCalled();
  });

  it('should  update item', () => {
    const updatedItem : Item = {
      id: 1,
      title: 'Samsung Galaxy M31',
      description: '',
      quantity: 0,
      price: 0,
      imagePath: ''
    }
    service.updateItem(1, updatedItem);
    const items = service.getItems();
    expect(items[0]).toEqual(updatedItem);
  });

  it('should  add item', () => {
    const newItem : Item = {
      id: 1,
      title: 'Samsung Galaxy M31',
      description: '',
      quantity: 0,
      price: 0,
      imagePath: ''
    }
    const lengthBefore = service.getItems().length;
    service.addItem(newItem);
    expect(service.getItems().length).toEqual(lengthBefore + 1);
  });

});
