import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
characters: any;
searchText: any;
items = [
  'tables',
  'posish',
  'mats',
  'tiles',
  'head boards',
  'microwave'
]

}
