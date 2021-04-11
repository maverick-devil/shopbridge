import { Injectable } from "@angular/core";

import { Item } from "./item.model";

import itemsList from '../../assets/items.json';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = itemsList.slice();
  itemsSubject: Subject<Item[]>;

  constructor() {
    this.itemsSubject = new Subject<Item[]>();
  }

  getItems() {
    return this.items;
  }

  updateItemsList() {
    this.itemsSubject.next(this.items);
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id != id);
    this.updateItemsList();
  }

  updateItem(id: number, updatedItem: Item) {
    const index: number = this.items.findIndex((item: Item) => item.id == id);
    this.items[index].title = updatedItem.title;
    this.items[index].price = updatedItem.price;
    this.items[index].description = updatedItem.description;
    this.items[index].quantity = updatedItem.quantity;
    this.items[index].imagePath = updatedItem.imagePath;
  }

  addItem(item: Item) {
    item.id = this.items.length + 1;
    this.items.push(item);
    this.updateItemsList();
  }
}