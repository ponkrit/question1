import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public VALUE_TYPE = {
    IS_PRIME: '1',
    IS_FIBONACCI: '2'
  }
  public inputValue = 1;
  public valueType = '1';
  public result = false;

  public calculateByValue = function (value):void {
    this.inputValue = parseFloat(value);
    this.result = this._calculate(this.inputValue, this.valueType);
  };

  public calculateByType = function (value):void {
    this.valueType = value;
    this.result = this._calculate(this.inputValue, this.valueType);
  };

  private _calculate = function (value: number, type: string): boolean {
    let result = false;

    switch (type) {
      case this.VALUE_TYPE.IS_PRIME:
        result = this._isPrimeValue(value);
        break;
      case this.VALUE_TYPE.IS_FIBONACCI:
        result = this._isFibonacciValue(value);
        break;
    }

    return result;
  }

  private _isPrimeValue = function (value: number): boolean {
    for(let num = 2; num < value; num++) {
      if(value % num === 0) {
        return false;
      }
    }

    return (value > 1);
  }

  private _isFibonacciValue = function (value: number): boolean {
    const isSquare = (n) => {
      return n > 0 && Math.sqrt(n) % 1 === 0;
    };

    if (isSquare(5 * (value * value) - 4) || isSquare(5 * (value * value) + 4)) {
      return true;
    }

    return false;
  }
}
