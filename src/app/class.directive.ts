import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { }

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }  

  @Input('appClass') set textFondWeight(weight: string) {
    console.log("method: textFondWeight");
    this.element.nativeElement.style.fontWeight = weight;
  }
  
  @Input('appClass2') set textSize(size: number) {
    console.log("method: textSize");
    this.element.nativeElement.style.fontSize = size + 'px';
  }


}
