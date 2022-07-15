import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = 'Lorem';
  enteredText = '';


  onInput(value: string) {
    this.enteredText = value;
  }
  
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pending";
    }

    return (randomLetter === enteredLetter) ? "correct" : "incorrect";
  }

}
