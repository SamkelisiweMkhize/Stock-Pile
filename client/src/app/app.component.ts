import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = "";

  items = [
    'tables',
    'posish',
    'mats',
    'tiles',
    'head boards',
    'microwave'
  ]
}
