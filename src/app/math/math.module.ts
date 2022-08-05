import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ]
})
export class MathModule {

  static sum(a: number, b: number) {
    return a + b;
  }
 }
