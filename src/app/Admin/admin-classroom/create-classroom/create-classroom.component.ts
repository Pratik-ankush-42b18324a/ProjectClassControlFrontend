import { Component } from '@angular/core';
import { Classroom } from '../../../models/Classroom';
import { AdminserviceService } from '../../../service/adminservice.service';
import { ClassroomCreateRequest } from '../../../models/ClassroomCreateRequest';
import { Course } from '../../../models/Course';
import { Teacher } from '../../../models/Teacher';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrl: './create-classroom.component.css'
})
export class CreateClassroomComponent {

  courseId: number = 0;
  teacherId: number = 0;
  classroomName: string = '';
  classroomDescription: string = '';

  constructor(private adminService: AdminserviceService) {}

  onSubmit() {
    const request = new ClassroomCreateRequest(this.courseId, this.teacherId, this.classroomName, this.classroomDescription);
    this.adminService.createClassroom(request).subscribe(
      response => {
        console.log('Classroom created successfully:', response);
      },
      error => {
        console.error('Error creating classroom:', error);
      }
    );
  }
}
