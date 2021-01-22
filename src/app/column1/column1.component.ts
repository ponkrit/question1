import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-column1',
  templateUrl: './column1.component.html',
  styleUrls: ['./column1.component.css']
})
export class Column1Component {
  @Output() onInputValueChanged:EventEmitter<string> = new EventEmitter<string>();
  public inputValue:string = '1';

  public onInputValueChange = function (): void {
    const newValue = this._validate(this.inputValue);

    setTimeout(() => {
      this.inputValue = newValue;
      this.onInputValueChanged.emit(newValue);
    }, 100);
  }

  private _validate = function (inputValue): string {
    inputValue = inputValue.replace(/[^\d.-]/g, '') || '';

    if (parseFloat(inputValue) < 0) {
      inputValue = '1';
    }

    return inputValue;
  }
}
