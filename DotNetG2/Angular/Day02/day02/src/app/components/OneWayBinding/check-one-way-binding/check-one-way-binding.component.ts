import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way-binding',
  templateUrl: './check-one-way-binding.component.html',
  styleUrls: ['./check-one-way-binding.component.css'],
})
export class CheckOneWayBindingComponent {
  title: string = 'Our Products';
  myNum: number = 123;
  flag: boolean = false;
  imgSrc1: string = '1.jpg';
  imgSrc2: string = 'assets/imgs/2.jpg';
}
