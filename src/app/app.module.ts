import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UnlessDirective } from './directive-examples/custom-structural/unless.directive';
import { DirectiveComponentComponent } from './directive-examples/directive-component.component';
import { CustomDropdownToggleDirective } from './directive-examples/custom-dropdown-toggle/custom-dropdown-toggle.directive';
import { DataSharingComponent, CompBComponent, CompAComponent } from './data-sharing';
import { DataService } from './data-sharing/data.service';
import { QueryParamsComponent } from './query-params/query-params.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    DirectiveComponentComponent,
    CustomDropdownToggleDirective,
    DataSharingComponent,
    CompAComponent,
    CompBComponent,
    QueryParamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
