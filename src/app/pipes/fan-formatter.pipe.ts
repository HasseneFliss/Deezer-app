import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fanFormatter'
})
export class FanFormatterPipe implements PipeTransform {

  transform(value: number): string {
    value = Math.floor(value / 1000);
    const num_parts = value.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${num_parts.join(".")} k Fans`;
  }
}
