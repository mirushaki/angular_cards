import { Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit {
  @Input() name: string = '';

  constructor(public element: ElementRef) {
    console.log(element.nativeElement);
   }
  ngOnInit(): void {
    console.log(this.name);
  }
}
