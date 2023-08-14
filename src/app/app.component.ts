import { Component, Injectable } from '@angular/core';
import { StudentRegistration } from './models/student-resitration';
import { StudentResitrationService } from './service/student-resitration.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StuRegisSystem';
  stuRegister: StudentRegistration [] = [];

  constructor(private StudentResitrationService : StudentResitrationService) {}

  ngOnInit() : void {
    this.stuRegister = this.StudentResitrationService.getStudentRegistration();
    console.log(this.stuRegister);
  }



  
}
