import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  temp: any;
  products: { id: number; name: string }[] = [];
  constructor() {
    this.products = [
      { id: 1, name: 'book' },
      { id: 2, name: 'Pen' },
      { id: 3, name: 'watch' },
    ];
  }
  appData: string = 'welcome from app component';

  getData(x: any) {
    this.temp = x;
    console.log(x);
  }
}
