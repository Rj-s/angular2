import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-query-params',
  template: `
param value is :-    {{id}}
  `
})
export class QueryParamsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private id: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.subscription = activeRoute.params.subscribe(
      (param: any) => this.id = param['id']
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
