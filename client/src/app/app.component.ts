import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = "";

  characters = [
    'broom',
    'washing machine',
    'scoop',
    'tiles',
    'microwave',
    'mats'
  ]
}
