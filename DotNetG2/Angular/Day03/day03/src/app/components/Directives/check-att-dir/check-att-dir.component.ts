import { Component } from '@angular/core';

@Component({
  selector: 'app-check-att-dir',
  templateUrl: './check-att-dir.component.html',
  styleUrls: ['./check-att-dir.component.css'],
})
export class CheckAttDirComponent {
  flag: boolean = false;

  toggle() {
    this.flag = !this.flag;
  }
}
