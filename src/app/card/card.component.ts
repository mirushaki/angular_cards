import { PostInterface } from './../post-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: PostInterface = {
    title: '',
    imageUrl: '',
    username: '',
    content: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
