import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_cards';
  imageURL = 'assets/biking.jpeg';
  result = ['', ''];

  constructor() {
    this.result = ['🥚', '🐤'].sort();
    console.log(this.result);
  }
}
