import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentRegistration } from 'src/app/models/student-resitration';
import { StudentRegistrationService } from './../../service/student-registration.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() student? : StudentRegistration;
  @Output() StudentsUpdated = new EventEmitter<StudentRegistration[]>(); 

  constructor( private studentRegistrationService: StudentRegistrationService ) { }
  

  ngOnInit(): void { }

  
  updateStudent (student: StudentRegistration) {
    this.studentRegistrationService
      .updateStudent(student)
      .subscribe((students: StudentRegistration[]) => this.StudentsUpdated.emit(students));
  }

  deleteStudent (student: StudentRegistration) {
    this.studentRegistrationService
      .deleteStudent(student)
      .subscribe((students: StudentRegistration[]) => this.StudentsUpdated.emit(students));
  }

  createStudent (student: StudentRegistration) {
    this.studentRegistrationService
      .createStudent(student)
      .subscribe((students: StudentRegistration[]) => this.StudentsUpdated.emit(students));
  }

}
