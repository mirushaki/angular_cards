import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import { UNIT } from './convert.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;
  unit: UNIT;
  activeUnit: string = UNIT.KM;
  
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

  onMilesChange(event: Event) {
    let eventTarget = <HTMLInputElement>event.target;
    this.miles = parseFloat(eventTarget.value);
  }

  onUnitChange(unit: string) {
    this.activeUnit = unit;
  }

  originalOrder = (a: any,  b: any): number => {
    return 0;
  }

  public get getUnit(): typeof UNIT {
    return UNIT; 
  }

}
