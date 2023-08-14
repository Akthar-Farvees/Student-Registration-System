import { Injectable } from '@angular/core';
import { StudentRegistration } from '../models/student-resitration'; // Import the StudentRegister class

@Injectable({
  providedIn: 'root'
})
export class StudentResitrationService {

  constructor() { }

  public getStudentRegistration(): StudentRegistration[] {
    let stuRegister = new StudentRegistration();

    stuRegister.id = 1;
    stuRegister.firstName = "Akthar";
    stuRegister.lastName = "Farvees";
    stuRegister.mobile = "0757649401";
    stuRegister.email = "akthar@gmail.com";
    stuRegister.dob = "2000-05-24";  // Corrected date format
    stuRegister.address = "Colombo"; // Corrected capitalization

    return [stuRegister];
}


}
