import { Component } from '@angular/core';

@Component({
  selector: 'app-check-structural-directives',
  templateUrl: './check-structural-directives.component.html',
  styleUrls: ['./check-structural-directives.component.css'],
})
export class CheckStructuralDirectivesComponent {
  flag: boolean = false;
  color: string = 'yellow';
  toggle() {
    this.flag = !this.flag;
    console.log(this.flag);
  }
  itiTracks: string[] = ['Dotnet track', 'Mearn Track', 'Os Track', 'SD Track'];
}
