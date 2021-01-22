import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputValue = 1;

  public validateValue = function (value) {
    this.inputValue = value;
  };
}
