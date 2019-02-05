import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translationInFifty'
})
export class TranslationInFiftyPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value * 10;
  }

}
