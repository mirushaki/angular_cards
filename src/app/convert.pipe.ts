import { Pipe, PipeTransform } from '@angular/core';

export enum UNIT {
  KM = 'km',
  M = 'm',
  CM = 'cm',
}

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetunits: string): any {
    if(!value) {
      return '';
    }

    switch (targetunits) {
      case UNIT.KM:
        return value * 1.60934;
      case UNIT.M:
        return value * 1.60934 * 1000;
      case UNIT.CM:
        return value * 1.60934 * 1000 * 1000;
      default:
          throw new Error('Target unit not supported');
          
    }
  }
}
