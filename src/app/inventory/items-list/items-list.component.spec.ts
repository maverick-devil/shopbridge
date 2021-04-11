import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let itemsService: ItemsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ],
      providers: [ItemsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of items when onInit is invoked', () => {
    const service = TestBed.inject(ItemsService);
    const returnItems = [{
      id: 1,
      price: 100,
      quantity: 2,
      title: 'dummy',
      description: 'dummy',
      imagePath: '',
      category: ''
    }];
    spyOn(service, 'getItems').and.returnValue(returnItems);
    service.itemsSubject.next(returnItems);
    component.ngOnInit();
    expect(component.items).toEqual(returnItems);
    expect(service.getItems).toHaveBeenCalled();
  });

  it('should emit item', () => {
    const emitItem = {
      id: 1,
      price: 100,
      quantity: 2,
      title: 'dummy',
      description: 'dummy',
      imagePath: '',
      category: ''
    };
    spyOn(component.itemSelected, 'emit')
    component.onSelected(emitItem);
    fixture.detectChanges();
    expect(component.itemSelected.emit).toHaveBeenCalledWith(emitItem);
  });

});
