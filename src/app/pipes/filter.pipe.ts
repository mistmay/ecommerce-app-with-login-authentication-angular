import { Pipe, PipeTransform } from '@angular/core';
import { ProductTotal, Property } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ProductTotal[], filterString: string, propertyName: Property): ProductTotal[] {
    const result: ProductTotal[] = [];
    if (!value || filterString === '') {
      return value;
    } else {
      value.forEach((element: ProductTotal) => {
        if (element[propertyName].trim().toLowerCase().includes(filterString.trim().toLowerCase())) {
          result.push(element);
        }
      });
      return result;
    }
  }

}
