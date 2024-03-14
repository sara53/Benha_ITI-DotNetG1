import { Component } from '@angular/core';

@Component({
  selector: 'app-check-two-way-binding',
  templateUrl: './check-two-way-binding.component.html',
  styleUrls: ['./check-two-way-binding.component.css'],
})
export class CheckTwoWayBindingComponent {
  // Normal Way
  inputData: string = '';
  myElement: any; // h1
  getData(e: any): void {
    console.log(e);
    // this.myElement = e;
    // this.inputData = e.target.value;
  }
  // formsModule
  myTemp: string = '';
  // select
  selectValue: string = '';
  // showData
  //
  showData(x: any) {
    console.log(x.textContent);
  }
}
