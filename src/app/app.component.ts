import { Component, Injectable } from '@angular/core';
import { StudentRegistration } from './models/student-resitration';
import { StudentRegistrationService } from './service/student-registration.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StuRegisSystem';
  stuRegister: StudentRegistration [] = [];

  constructor(private studentRegistrationService: StudentRegistrationService) {}

  ngOnInit(): void {
    this.studentRegistrationService
      .getStudentRegistration()
      .subscribe((results: StudentRegistration[]) => (this.stuRegister = results));
  }
  

  selectedRegister: any = null;

  toggleDetails(register: any) {
    if (this.selectedRegister === register) {
      this.selectedRegister = null;
    } else {
      this.selectedRegister = register;
    }
  }




  
}
