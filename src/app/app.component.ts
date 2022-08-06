import { Component, OnInit } from '@angular/core';
import { MathModule } from './math/math.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comps';

  constructor() {
      console.log('1');
  }

  ngOnInit(): void {
    console.log(MathModule.sum(5, 7));
  }
}
