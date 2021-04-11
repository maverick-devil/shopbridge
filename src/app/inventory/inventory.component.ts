import { Component, OnInit } from '@angular/core';

import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: []
})
export class InventoryComponent implements OnInit {
  selectedItem: Item;

  constructor() { }

  ngOnInit(): void {

  }

  onSelected(item: Item) {
    this.selectedItem = item;
  }

}
