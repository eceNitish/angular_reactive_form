import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Registration } from '../register/register.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  studentsData : Registration[];

  constructor(private svc : SharedService) { 
    console.log("Table-view component loaded!");
  }

  ngOnInit() {
    if(localStorage.getItem('mem')==null){
      this.studentsData = [];
    }else{
      this.studentsData = JSON.parse(this.svc.getItems());
    }
    
    // this.studentsData = JSON.parse(this.svc.getItems());
  }

  ngDoCheck() {
    if(localStorage.getItem('mem')==null){
      this.studentsData = [];
    }else{
      this.studentsData = JSON.parse(this.svc.getItems());
    }
  }

  removeThis(i) {
    this.svc.deleteItem(this.studentsData, i);
  }

  removeAll() {
    this.svc.clearAll();
  }

}
