import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ctF'
})
export class CtFPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if (!value) {
      return null;
    }

    return value * 1.8 + 32;
  }

}
