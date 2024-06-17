import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../../service/teacher-service.service';
import { Classroom } from '../../models/Classroom';
import { Teacher } from '../../models/Teacher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.css']
})
export class ClassroomsListComponent implements OnInit {
  classrooms: Classroom[] = [];
  loggedInTeacher!: Teacher;

  constructor(private service: TeacherServiceService) { }

  ngOnInit(): void {
    const storedUsername = localStorage.getItem('loggedInTeacherUsername');
    if (storedUsername) {
      this.service.getTeacherByUsername(storedUsername).subscribe(
        (teacher) => {
          this.loggedInTeacher = teacher;
          this.fetchClassrooms();
        },
        (error) => {
          console.error('Error fetching teacher details:', error);
        }
      );
    } else {
      console.error('No logged-in teacher username found');
    }
  }

  fetchClassrooms(): void {
    this.service.getClassroomsByTeacherId(this.loggedInTeacher.teacher_Id).subscribe(
      (classrooms) => {
        this.classrooms = classrooms;
      },
      (error) => {
        console.error('Error fetching classrooms:', error);
      }
    );
  }

}
