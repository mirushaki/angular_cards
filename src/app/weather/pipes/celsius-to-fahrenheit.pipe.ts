import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFahrenheit'
})
export class CelsiusToFahrenheitPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (!value) {
      return '';
    }

    let valueNmb = Number.parseInt(value);
    return String(valueNmb * 1.8 + 32);
  }

}
