import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormatter'
})
export class DurationFormatterPipe implements PipeTransform {

  transform(duration: number): String {
    var time = new Date(duration * 1000);
    var minutes = time.getUTCMinutes();
    var seconds = time.getUTCSeconds();
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

}
