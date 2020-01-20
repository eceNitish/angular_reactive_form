import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home', component: RegisterComponent },
  {path: 'table', loadChildren: './table-view/table.module#TableModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
