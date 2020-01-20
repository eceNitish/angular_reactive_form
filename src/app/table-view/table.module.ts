import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { RouterModule, Routes } from '@angular/router';

const tabRoutes :Routes = [
  {path:'', component: TableViewComponent }
]

@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tabRoutes)
  ]
})
export class TableModule { 
  constructor() {
    console.log("Table module loaded!")
  }
}
