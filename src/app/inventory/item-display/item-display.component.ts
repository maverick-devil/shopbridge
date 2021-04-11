import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  @Input() selectedItem: Item;

  constructor(private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    let confirmDeletion = confirm("Are you sure you want to delete " + this.selectedItem.title + " ?");
    if(confirmDeletion) {
      const title = this.selectedItem.title;
      setTimeout(() => {alert("Item " + title + " deleted.")}, 2000);
      this.itemsService.deleteItem(this.selectedItem.id);
      this.selectedItem = null;
    }
  }

  onUpdate() {
    this.router.navigate(['/editItem'], {state:{data: this.selectedItem}});
  }

}
