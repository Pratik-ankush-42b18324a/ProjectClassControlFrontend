import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Classroom } from '../../models/Classroom';
import { Student } from '../../models/Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-classrooms-list',
  templateUrl: './student-classrooms-list.component.html',
  styleUrl: './student-classrooms-list.component.css'
})
export class StudentClassroomsListComponent implements OnInit {
  classrooms: Classroom[] = [];
  loggedInStudent: Student | null = null;
  errorMessage: string = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getLoggedInStudent();
  }

  getLoggedInStudent(): void {
    const storedUsername = localStorage.getItem('loggedInStudentUsername');
    if (storedUsername) {
      this.studentService.getStudentByUsername(storedUsername).subscribe(
        (student) => {
          this.loggedInStudent = student;
          this.fetchClassroomsForStudent(this.loggedInStudent.student_Id);
        },
        (error) => {
          this.errorMessage = 'Failed to fetch student details.';
          console.error('Error fetching student details:', error);
        }
      );
    } else {
      console.error('No logged-in student username found in localStorage');
    }
  }

  fetchClassroomsForStudent(studentId: number): void {
    this.studentService.getClassroomsByStudentId(studentId).subscribe(
      (classrooms) => {
        this.classrooms = classrooms;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch classrooms.';
        console.error('Error fetching classrooms:', error);
      }
    );
  }

}
