import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'comp-a',
  template: `
<input type="text" #input />
<button (click)="pushData(input.value)">Add Data</button>
<button (click)="getData()" >Show Data</button>
<button (click)="sendData(input.value)" >Send Data through EventEmitter</button>
<ul>
<li  *ngFor="let item of compAitems">{{item}} </li>
</ul>
  `
})
export class CompAComponent {

  private compAitems: string[] = [];

  constructor(private dataSvc: DataService) { }

  pushData(item: string) {
    this.dataSvc.setFormData(item);
  }

  getData() {
    this.compAitems = this.dataSvc.getFormData();
  }
  
  sendData(value: string) {
    this.dataSvc.pushFormData(value);
  }
}
