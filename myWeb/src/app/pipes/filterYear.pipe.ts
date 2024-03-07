import { Pipe, PipeTransform } from '@angular/core';
import { DiscoInfo } from '../models';

@Pipe({
  name: 'filterYear'
})
export class FilterYearPipe implements PipeTransform {
  transform(discos: DiscoInfo[], year: number): DiscoInfo[] {
    return discos.filter(disco => disco.year === year);
  }
}