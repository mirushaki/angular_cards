import { PostModel } from './post-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: PostModel[] = [
    new PostModel('Neat Tree', 'assets/tree.jpeg', '@nature', 'I saw this neat tree today'),
    new PostModel('Snowy mountain', 'assets/mountain.jpeg', '@mountainlover', 'Here is a picture of a snowy mountain'),
    new PostModel('Mountain biking1', 'assets/biking.jpeg', '@biking12222', 'I did some biking today')
  ];
}
