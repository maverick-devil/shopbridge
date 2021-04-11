import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item = {id: 0, title: '', description: '', price: 1, quantity: 1, imagePath: ''};
  imagePath: string = '';
  keyword: string = '';

  @ViewChild('formData') itemDetails: NgForm;

  constructor(private itemsService: ItemsService, private router: Router) {
    this.item = this.router.getCurrentNavigation().extras.state?.data;

  }

  ngOnInit(): void {
    this.keyword = this.router.url === '/addItem' ? 'Add' : 'Edit';
  }

  loadImage(event) {
    if(!this.item) {
      this.imagePath = (<HTMLInputElement>event.target).value;
    } else {
      this.item.imagePath = (<HTMLInputElement>event.target).value;
    }
  }

  isFormValid() {
    return this.itemDetails.valid;
  }

  onSubmit() {
    if(this.isFormValid()) {
      switch(this.keyword) {
        case 'Add':
          this.itemsService.addItem(this.itemDetails.value);
          alert('Item added to inventory');
          break;
        case 'Edit':
          this.itemsService.updateItem(this.item.id, this.itemDetails.value);
          alert('Item updated in inventory');
          break;
      }
      this.router.navigate(['/inventory']);
    } else {
      alert('Form data is invalid');
    }
  }

}
