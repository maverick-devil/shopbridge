import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let service: ItemsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ ItemComponent ],
      providers: [ItemsService, {provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.itemDetails = {
      "title": "Fjallraven - Foldsack No. 1 Backpack",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "imagePath": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "quantity": 100
    } as any as NgForm;

    component.item = {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "imagePath": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "quantity": 100
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should make call to addItem', () => {
    component.keyword = 'Add';
    service = TestBed.inject(ItemsService);
    spyOn(component, 'isFormValid').and.returnValue(true);
    spyOn(service, 'addItem');
    component.onSubmit();
    expect(service.addItem).toHaveBeenCalled();
  });

  it('should make call to updateItem', () => {
    component.keyword = 'Edit';
    service = TestBed.inject(ItemsService);
    spyOn(component, 'isFormValid').and.returnValue(true);
    spyOn(service, 'updateItem');
    component.onSubmit();
    expect(service.updateItem).toHaveBeenCalled();
  });

  it('should set value imagePath variable when item is null', () => {
    component.item = null;
    const event = {
      target: {
        value: "randomImagePath"
      }
    }as any as HTMLInputElement;
    component.loadImage(event);
    expect(component.imagePath).toEqual("randomImagePath");
  });

  it('should set value imagePath variable when item is null', () => {
    const event = {
      target: {
        value: "randomImagePath"
      }
    }as any as HTMLInputElement;
    component.loadImage(event);
    expect(component.item.imagePath).toEqual("randomImagePath");
  });

  it('should return the validity of form', () => {
    component.itemDetails = {...component.itemDetails, valid:true} as any as NgForm;
    component.isFormValid();
    expect(component.isFormValid).toBeTruthy();
  });

  it('should generate an alert', () => {
    spyOn(component, 'isFormValid').and.returnValue(false);
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Form data is invalid');
  });

  // it('should remove the branch check', () => {
  //   let router = TestBed.inject(Router);
  //   router = {...router, url: '/addItem'} as any as Router;
  //   component.ngOnInit();
  //   expect(component.keyword).toEqual('Add');
  // });
});

class RouterStub{
  item: Item = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "imagePath": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "quantity": 100
  };
  getCurrentNavigation(){
    return {
       extras: {
          state: {
            data: this.item
          }
        }
      }
  };
  navigate() {

  }
}
