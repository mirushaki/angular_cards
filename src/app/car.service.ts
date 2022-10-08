import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {
    console.log("I'm CarService");
  }

  getCarData() {
    console.log("CarService: getCarData method");

    return {
      mark: "Ford",
      color: "Black"
    }
  }
}
