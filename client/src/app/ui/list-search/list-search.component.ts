import { Component, Input } from '@angular/core';
import { ListInterface } from 'src/app/interface/list';
@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent {


  @Input() listSearchData?: ListInterface[]
}
