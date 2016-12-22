import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html'
})
export class DirectiveComponentComponent implements OnInit {

  private switch = false;
  private customSwitch = false;
  constructor() { }

  ngOnInit() {
  }

  onSwitch() {
    this.switch = !this.switch;
  }

  onSwitchCustom() {
    this.customSwitch = !this.customSwitch;
  }
}
