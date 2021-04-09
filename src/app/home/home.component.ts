import { Component, OnInit } from '@angular/core';

interface CarouselModel {
  imagePath: string,
  caption: string,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel: CarouselModel[];

  constructor() { }

  ngOnInit() {
    this.carousel = [
      {
        imagePath: '../../assets/home/image-1.jpg',
        caption: 'Furniture you would never like to get off.',
      },
      {
        imagePath: '../../assets/home/image-2.jpg',
        caption: 'Smartphones you would just love.',
      },
      {
        imagePath: '../../assets/home/image-3.jpg',
        caption: 'Crockery you would just keep looking at.',
      },
      {
        imagePath: '../../assets/home/image-4.jpg',
        caption: 'Sports equipments just what you want.',
      }
  ];
  }
}
