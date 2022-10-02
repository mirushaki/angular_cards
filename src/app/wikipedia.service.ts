import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { 
    
  }

  public request() {
    console.log("I'm wikipedia service");
  }

}
