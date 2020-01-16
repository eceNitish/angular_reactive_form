import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student: Registration;
  studentsData = [
    {
      firstName: 'Nitish',
      lastName: 'kumar',
      email: 'a@b',
      password: 'abc',
      gender: 'male'
    },
    {
      firstName: 'Ana',
      lastName: 'kur',
      email: 'a@bwe',
      password: 'abca',
      gender: 'female'
    },
    {
      firstName: 'Rohan',
      lastName: 'singh',
      email: 'r@b',
      password: 'asdbc',
      gender: 'male'
    }
  ];

  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, Validators.required)
    });

    this.studentsData = JSON.parse(localStorage.getItem('mem'));
  }

  onSubmit() {

    this.student = {
      firstName: this.reactiveForm.value.firstName,
      lastName: this.reactiveForm.value.lastName,
      email: this.reactiveForm.value.email,
      password: this.reactiveForm.value.password,
      gender: this.reactiveForm.value.gender
    }

    this.studentsData.push(this.student);
    localStorage.setItem('mem', JSON.stringify(this.studentsData));
    this.reactiveForm.reset();
    // console.log(this.student);
  }

  removeThis(i) {
    this.studentsData.splice(i, 1);
    localStorage.setItem('mem', JSON.stringify(this.studentsData));
  }

}
