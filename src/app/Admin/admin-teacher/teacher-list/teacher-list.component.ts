import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../../service/adminservice.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Teacher } from '../../../models/Teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers: Observable<Teacher[]> = of([]);
  public courses: any[] = []; // Replace with your actual Course model
  public selectedTeacherId!: number; // Non-null assertion operator
  public selectedCourseId!: number; // Non-null assertion operator
  public showAddToCourseForm: boolean = false;

  constructor(private service: AdminserviceService, private router: Router) { }

  ngOnInit() {
    this.getAll();
    this.loadCourses();
  }

  getAll(): void {
    this.service.getAllTeachers().subscribe({
      next: (data: Teacher[]) => {
        this.teachers = of(data);
      },
      error: (error: any) => {
        console.error('Error loading teacher list', error);
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
  

  generatePassword(teacherId: number): void {
    this.service.generatePasswordForTeacher(teacherId).subscribe({
      next: (response) => {
        console.log(response); // Handle success
        alert(response);
      }
    });
  }

  openAddToCourseForm(teacherId: number): void {
    this.selectedTeacherId = teacherId;
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
    this.service.addTeacherToCourse(this.selectedTeacherId, this.selectedCourseId).subscribe({
      next: (response) => {
        console.log(response);
        alert(response);
        this.closeAddToCourseForm();
      },
      error: (error: any) => {
        console.error('Error adding teacher to course', error);
        alert('Error adding teacher to course');
      }
    });
  }

  sendCredentials(teacherId: number): void {
    this.service.sendTeacherCredentials(teacherId).subscribe({
    next: (response) => {
    console.log(response);
    alert('Teacher login credentials sent successfully.');
    },
    error: (error: any) => {
    console.error('Error sending teacher credentials', error);
    alert('Error sending teacher credentials');
    }
    });
    }
}
