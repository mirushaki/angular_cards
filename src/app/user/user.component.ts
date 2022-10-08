import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers: [UserService, CarService] // It picks new CarServie
  providers: [UserService] // It uses existed CarService (CarService has {providedIn: "root"} )
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private carService: CarService) { 
    console.log("I'm UserComponent");

    const userData = userService.getUserData();
    console.table(userData);

    const carData = carService.getCarData();
    console.table(carData);
  }

  ngOnInit(): void {
  }

}
