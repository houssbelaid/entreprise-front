import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], filterby: string): IProduct[] {
    filterby = filterby ? filterby.toLocaleLowerCase() : null;
    return filterby ? value.filter((product: IProduct) =>
     product.productName.toLocaleLowerCase().indexOf(filterby) !== -1) : value;
  }

}
