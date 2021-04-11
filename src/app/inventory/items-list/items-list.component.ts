import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Output() itemSelected = new EventEmitter<Item>();
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
    this.itemsService.itemsSubject.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
  }

  onSelected(item: Item) {
    this.itemSelected.emit(item);
  }
}
