import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../models/Student';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../service/adminservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {


  public students: Observable<Student[]> = of([]);
  public courses: any[] = []; // Replace with your actual Course model
  public selectedStudentId!: number; // Non-null assertion operator
  public selectedCourseId!: number; // Non-null assertion operator
  public showAddToCourseForm: boolean = false;

  constructor(private service: AdminserviceService, private router: Router) { }

  ngOnInit() {
    this.getAll();
    this.loadCourses();
  }

  getAll(): void {
    this.service.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = of(data);
      },
      error: (error: any) => {
        console.error('Error loading student list', error);
      }
    });
  }

  loadCourses(): void {
    this.service.getAllCourse().subscribe({
      next: (data: any[]) => {
        this.courses = data;
        console.log(this.courses); // Log the courses to ensure they are fetched
      },
      error: (error: any) => {
        console.error('Error loading course list', error);
      }
    });
  }

  openAddToCourseForm(studentId: number): void {
    this.selectedStudentId = studentId;
    this.showAddToCourseForm = true;
  }

  closeAddToCourseForm(): void {
    this.showAddToCourseForm = false;
  }

  submitAddToCourse(): void {
    if (!this.selectedCourseId) {
      alert('Please select a course.');
      return;
    }
    this.service.addStudentToCourse(this.selectedStudentId, this.selectedCourseId).subscribe({
      next: (response) => {
        console.log(response);
        alert(response);
        this.closeAddToCourseForm();
      },
      error: (error: any) => {
        console.error('Error adding student to course', error);
        alert('Error adding teacher to course');
      }
    });
}

sendCredentials(studentId: number): void {
  this.service.sendStudentCredentials(studentId).subscribe({
  next: (response) => {
  console.log(response);
  alert('Student login credentials sent successfully.');
  },
  error: (error: any) => {
  console.error('Error sending student credentials', error);
  alert('Error sending student credentials');
  }
  });
  }

  generatePassword(studentId: number): void {
    this.service.generatePasswordForStudent(studentId).subscribe({
      next: (response) => {
        console.log(response); // Handle success
        alert(response);
      }
    });
  }

}
