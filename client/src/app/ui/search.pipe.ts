import { Pipe, PipeTransform } from '@angular/core';
// import { list } from './categories/';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    return items
      ? items.filter(
          (item: any) => item.items.search(new RegExp(searchText, 'i')) > -1
        )
      : [];
  }
}