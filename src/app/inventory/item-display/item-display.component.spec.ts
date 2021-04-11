import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemsService } from '../items.service';

import { ItemDisplayComponent } from './item-display.component';

describe('ItemDisplayComponent', () => {
  let component: ItemDisplayComponent;
  let fixture: ComponentFixture<ItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ItemDisplayComponent ],
      providers: [ItemsService,
        {
          provide: Router,
          useValue: {
            navigate: () => {

            }
        }}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDisplayComponent);
    component = fixture.componentInstance;
    component.selectedItem = {
      id: 1,
      title: 'someTitle',
      description: '',
      price: 0,
      quantity: 0,
      imagePath: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the list item', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onUpdate();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should delete the list item', fakeAsync(() => {
    const itemsService = TestBed.inject(ItemsService);
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(itemsService, 'deleteItem');
    jasmine.clock().install();
    spyOn(window, 'setTimeout').and.callThrough();
    jasmine.clock().tick(2001);
    component.onDelete();
    expect(itemsService.deleteItem).toHaveBeenCalledWith(1);
    jasmine.clock().uninstall();
  }));

  it('should do nothing in onDelete', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.onDelete();
  });
});
