import { Injectable } from '@angular/core';
import { StudentRegistration } from '../models/student-resitration'; // Import the StudentRegister class
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private url = "StudentRegistration";



  constructor( private http: HttpClient ) { }

  public getStudentRegistration(): Observable<StudentRegistration[]> {
    return this.http.get<StudentRegistration[]>(`${environment.apiUrl}/${this.url}`);
  }
  
  


}
