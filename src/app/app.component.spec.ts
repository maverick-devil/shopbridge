import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ItemsService } from './inventory/items.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        ItemsService
      ],
    }).compileComponents();
  });

});