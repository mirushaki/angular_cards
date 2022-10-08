import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [UserService]
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private userService: UserService) {
    console.log("I'm CarComponent");

    const carData = carService.getCarData();
    console.table(carData);

    const userData = userService.getUserData();
    console.table(userData);

  }


  ngOnInit(): void {
  }

}
