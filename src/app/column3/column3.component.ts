import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-column3',
  templateUrl: './column3.component.html',
  styleUrls: ['./column3.component.css']
})
export class Column3Component {
  @Input() result:boolean = false;
}
