import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  
  onNameChange(event:  Event) {
    let eventTarget = <HTMLInputElement>event.target;
    this.name = eventTarget.value;
  }

  onDateChange(event:  Event) {
    let eventTarget = <HTMLInputElement>event.target;
    this.date = eventTarget.value;
  }

  onAmountChange(event:  Event) {
    let eventTarget = <HTMLInputElement>event.target;
    this.amount = parseFloat(eventTarget.value);
  }

  onHeightChange(event:  Event) {
    let eventTarget = <HTMLInputElement>event.target;
    this.height = parseFloat(eventTarget.value);
  }

}
