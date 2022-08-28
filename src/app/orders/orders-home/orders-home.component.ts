import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css']
})
export class OrdersHomeComponent implements OnInit {

  items = [
    {
      src: "https://unsplash.com/photos/guXX_Wm-wnY",
      title: "Restaurant"
    },
    {
      src: "https://unsplash.com/photos/y_WDEY9e6mA",
      title: "Shop"
    },
    {
      src: "https://unsplash.com/photos/UWRqlJcDCXA",
      title: "Cafe"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
