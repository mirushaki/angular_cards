import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = 'Lorem';
  enteredText = '';

  solved = false;


  onInput(value: string) {
    if (value === this.randomText) {
      this.solved = true;
    } else {
      this.solved = false;
    }
  }
  

}
