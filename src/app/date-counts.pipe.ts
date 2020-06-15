import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounts'
})
export class DateCountsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
