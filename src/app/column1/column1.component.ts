import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-column1',
  templateUrl: './column1.component.html',
  styleUrls: ['./column1.component.css']
})
export class Column1Component {
  @Output() onInputValueChanged:EventEmitter<number> = new EventEmitter<number>();
  public inputValue:number = 1;

  public onInputValueChange = function () {
    const newValue = this._validate(this.inputValue);

    setTimeout(() => {
      this.inputValue = newValue;
      this.onInputValueChanged.emit(newValue);
    }, 100);
  }

  private _validate = function (inputValue) {
    inputValue = inputValue.replace(/[^\d.-]/g, '');

    if (inputValue < 0) {
      inputValue = 1;
    }

    return inputValue;
  }
}
