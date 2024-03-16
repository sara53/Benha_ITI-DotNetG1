import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: { name: string; age: number } = { name: 'hager', age: 22 };

  @Output() myEvent = new EventEmitter();

  ngOnInit(): void {
    this.myEvent.emit(this.loginData);
  }
}
