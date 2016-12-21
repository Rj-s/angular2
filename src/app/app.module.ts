import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UnlessDirective } from './directive-examples/custom-structural/unless.directive';
import { DirectiveComponentComponent } from './directive-examples/directive-component.component';
import { CustomDropdownToggleDirective } from './directive-examples/custom-dropdown-toggle/custom-dropdown-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    DirectiveComponentComponent,
    CustomDropdownToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
