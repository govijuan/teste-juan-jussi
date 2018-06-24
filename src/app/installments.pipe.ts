import { Pipe, PipeTransform } from '@angular/core';
/*
  Create number which is the twelveth part of the provided number
*/

@Pipe({name: 'divideIn'})

export class DivideInPipe implements PipeTransform {
  transform(value: number, divider: number): number {
    let thwelvethPart = value / divider;
    return thwelvethPart;
  }
}