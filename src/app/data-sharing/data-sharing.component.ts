import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-sharing',
  template: `
  <h3>Data Sharing between two components through service and event emitter</h3>
  <div class="row">
  <div class="col-sm-6"><comp-a></comp-a></div>
  <div class="col-sm-6"><comp-b></comp-b></div>
  </div>
  `
})
export class DataSharingComponent {

}
