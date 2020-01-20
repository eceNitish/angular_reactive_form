import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from './register.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student: Registration;
  studentsData : Registration[] = [
    
  ];

  reactiveForm: FormGroup;

  constructor(private svc : SharedService) {
    console.log("Register component loaded!");
   }

  ngOnInit() {

    this.reactiveForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, Validators.required)
    });
    if(localStorage.getItem('mem')==null){

    }else{
      this.studentsData = JSON.parse(localStorage.getItem('mem'));
    }
    
  }

  onSubmit() {

    this.student = {
      firstName: this.reactiveForm.value.firstName,
      lastName: this.reactiveForm.value.lastName,
      email: this.reactiveForm.value.email,
      password: this.reactiveForm.value.password,
      gender: this.reactiveForm.value.gender
    }

    this.svc.setItem(this.studentsData, this.student);
    this.reactiveForm.reset();
  }

  removeThis(i) {
    this.svc.deleteItem(this.studentsData, i);
  }

  clearAll() {
    this.svc.clearAll();
  }


}
