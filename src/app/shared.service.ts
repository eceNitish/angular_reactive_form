import { Injectable } from '@angular/core';
import { Registration } from './register/register.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("Shared Service Running!");
  }


  setItem (studentsData:Registration[], data:Registration){
    studentsData.push(data);
    localStorage.setItem('mem', JSON.stringify(studentsData));
  }

  getItems (){
    return localStorage.getItem('mem');
  }

  deleteItem (studentsData:Registration[], i) {
    studentsData.splice(i, 1);
    localStorage.setItem('mem', JSON.stringify(studentsData));
  }

  clearAll(){
    localStorage.clear();
  } 
}
