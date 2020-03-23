import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fanFormatter'
})
export class FanFormatterPipe implements PipeTransform {

  transform(value: number): string {
    value = Math.floor(value / 1000);
    return `${value}k Fans`;
  }
}
