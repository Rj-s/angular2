import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'comp-b',
  template: `
<input type="text" #input />
<button (click)="pushData(input.value)">Add Data</button>
<button (click)="getData()" >Show Data</button>
<ul>
<li  *ngFor="let item of compBitems">{{item}} </li>
</ul>
<p>{{value}}</p>
  `
})
export class CompBComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private compBitems: string[] = [];
  private value: string = ''

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.subscription = this.dataSvc.eventEmt.subscribe(
      data => this.value = data
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  pushData(item: string) {
    this.dataSvc.setFormData(item);
  }

  getData() {
    this.compBitems = this.dataSvc.getFormData();
  }

}
