import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
    console.log("I'm UserService");
  }

  getUserData() {
    console.log("UserSerive: getUserData method");
    
    return {
      name: "Angular",
      surname: "Angularadze"
    };
  }


}
