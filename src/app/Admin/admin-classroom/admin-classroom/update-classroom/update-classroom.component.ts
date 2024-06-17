import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../../models/Classroom';
import { ClassroomUpdateRequest } from '../../../../models/ClassroomUpdateRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../../../../service/adminservice.service';

@Component({
  selector: 'app-update-classroom',
  templateUrl: './update-classroom.component.html',
  styleUrl: './update-classroom.component.css'
})
export class UpdateClassroomComponent  implements OnInit {

  classroomUpdateRequest: ClassroomUpdateRequest = {
    classroomId: 0,
    teacherId: 0,
    classroomName: '',
    classroomDescription: ''
  };

  constructor(private service: AdminserviceService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    this.service.updateClassroom(this.classroomUpdateRequest).subscribe({
      next: (response) => {
        console.log('Classroom updated successfully', response);
        this.router.navigate(['/classroom-list']);
      },
      error: (error) => {
        console.error('Error updating classroom', error);
      }
    });
  }
 
}
