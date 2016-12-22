import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataSharingComponent } from './data-sharing'
import { DirectiveComponentComponent } from './directive-examples/directive-component.component';
import { QueryParamsComponent } from './query-params/query-params.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DirectiveComponentComponent },
  { path: 'directive-exp', component: DirectiveComponentComponent },
  { path: 'data-sharing', component: DataSharingComponent },
  { path: 'query-param/:id', component: QueryParamsComponent }
]

export const routing = RouterModule.forRoot(routes);
