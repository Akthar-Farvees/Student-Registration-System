import { Component, Injectable, HostListener } from '@angular/core';
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
  showSearchInput: boolean = false;
  searchQuery: string = '';



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

    // Method to toggle search input visibility
    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput;
    }


  editStudent(student: StudentRegistration) {
      this.studentToEdit = student;
      this.showForm = !this.showForm;
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


    // Scroll to top function
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Show/hide scroll-to-top button based on scroll position
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (scrollToTopButton) {
      scrollToTopButton.style.display = (window.scrollY > 500) ? 'block' : 'none';
    }
    }

    filteredStuRegister: StudentRegistration[] = [];
    performSearch(query: string) {
      console.log('Performing search with query:', query);
    
      query = query.toLowerCase();
      this.filteredStuRegister = this.stuRegister.filter(
        (register) =>
          register.firstName.toLowerCase().includes(query) ||
          register.lastName.toLowerCase().includes(query) ||
          register.mobile.toLowerCase().includes(query) ||
          register.email.toLowerCase().includes(query) ||
          register.nic.toLowerCase().includes(query)
      );
    
      console.log('Filtered results:', this.filteredStuRegister);
    }
    
    
   
}
