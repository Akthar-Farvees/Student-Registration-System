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
  studentToEdit?: StudentRegistration;

  constructor(private studentRegistrationService: StudentRegistrationService) {}

  ngOnInit(): void {
    this.studentRegistrationService
      .getStudentRegistration()
      .subscribe((results: StudentRegistration[]) => (this.stuRegister = results));
  }
  
  showForm: boolean = false; // Initialize to false

  initStudent() {
      this.showForm = !this.showForm;
      this.studentToEdit = new StudentRegistration();
  }

  editStudent(student: StudentRegistration) {
      this.studentToEdit = student;
  }

  updateStudentList(students: StudentRegistration[]) {
    this.stuRegister = students;
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
