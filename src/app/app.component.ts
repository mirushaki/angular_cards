import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;


  changeValue() {
    console.log("Call change value method");
  }

  notifyResult() {
    this.value += 5;
    console.log("Method: notifyResult; Value " + this.value);
  }
  

}
