import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';



@Injectable({ providedIn: 'root' })
class Sedan {
  drive(): void {
    console.log("I'm Sedan");
  }
}

@Injectable({ providedIn: 'root' })
class Mercedes extends Sedan {

  override drive() {
      console.log("I'm Mercedes");
  }

}

@Injectable({ providedIn: 'root' })
class Ford extends Sedan {

  override drive() {
      console.log("I'm Ford");
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private car: Sedan, private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    console.log(term);

    this.car.drive();
    this.wikipedia.request();
  }
}
