import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-column2',
  templateUrl: './column2.component.html',
  styleUrls: ['./column2.component.css']
})
export class Column2Component {
  @Output() onInputTypeChanged:EventEmitter<number> = new EventEmitter<number>();
  public valueType: string = '1';

  public onValueTypeChange = function (): void {
    this.onInputTypeChanged.emit(this.valueType);
  }
}
